/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { sourceSans3 } from "@/config/fonts";
import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";
import axios from "axios";
import { useEffect, useMemo, useState } from "react";
import cookie from "cookiejs";
import Message from "@/components/app_ui/Message";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { MultiStepLoader as Loader } from "@/components/ui/multi-step-loader";
import { useRouter } from "next/navigation";
import Dialog from "./filemanager/dialog";
import Avatar from "@/components/ui/avatar";
import GetUserName from "@/components/api/get-user-name";
import { DOCUMENT_LOADING_STATES, INPUT_PLACEHOLDERS, QUERY_LOADING_STATES } from "@/components/data";
import Image from "next/image";

interface SendPromptParams {
  query: string;
  chat_id: string;
  user_id: string;
  mode?: string;
  tags: string[]
  document?: string | null;
};


const Dashboard = () => {
  const [chatName, setChatName] = useState("");
  const [showDialog, setShowDialog] = useState(false);
  const [response, setResponse] = useState<string | null>(null);
  const [hid, setHid] = useState<boolean>(false);
  const [selectedDocument, setSelectedDocument] = useState<string | null>(null)
  const [messages, setMessages] = useState<
    { sender: "user" | "ai"; content: string }[]
  >([]);
  const router = useRouter()
  const [chatId, setChatId] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [tags, setTags] = useState<string[]>([]);
  const [userName, setUsername] = useState("")

  const loadingStates = useMemo(() => !selectedDocument ? QUERY_LOADING_STATES: DOCUMENT_LOADING_STATES, [selectedDocument])

  useEffect(() => {
    (async () => {
      const res = await GetUserName();
      setUsername(res);
    })();
  }, []);

  const getUserId = async () => {
    try {
      const token = cookie.get("jwt");
      if (!token) {
        console.error("No JWT token found");
        return;
      }

      const response = await axios.get(
        "http://localhost:3002/auth/get-user-id",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200) {
        return response.data.user_id;
      }
    } catch (error: any) {
      if (error.response) {
        console.error("Server error:", error.response.data.msg);
      } else {
        console.error("Request error:", error.message);
      }
    }
  };


  const sendPrompt = async (params: SendPromptParams): Promise<void> => {
    const { query, chat_id, user_id, mode = "QUERY", document = null, tags } = params;
    const token = cookie.get("jwt");
    if (!token) {
      console.error("JWT token is missing");
      return;
    }
    try {
      setLoading(true);

      const aiResponse = await axios.post(
        "http://localhost:8000/prompt",
        { query, chat_id, user_id, mode, document, tags },
        { headers: { Authorization: `${token}` }, responseType: "json" }
      );

      const aiMessage = aiResponse.data;
      setMessages((prev) => [...prev, { sender: "ai", content: aiMessage }]);

      await axios.post(
        "http://localhost:3002/chat_mng/insert_msg",
        { chat_id, user_id, user_msg: query, ai_msg: aiMessage, tags },
        { headers: { Authorization: `Bearer ${token}` } }
      );
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (chatName.startsWith('@')) {
       setTags([...tags, chatName])
       setChatName("")
       return
    }
    setHid(true);
    const userId = await getUserId();
    if (!userId) {
      setResponse("Failed to retrieve User ID. Cannot create chat.");
      return;
    }

    try {
      const token = cookie.get("jwt");
      if (!token) {
        console.error("No JWT token found");
        return;
      }

      if (!chatId) {
        const res = await axios.post(
          "http://localhost:3002/chat_mng/create_chat",
          { chat_name: chatName, user_id: userId },
          { headers: { Authorization: `Bearer ${token}` } }
        );

        if (res.status === 200) {
          const createdChatId = res.data.chat_id;
          setChatId(createdChatId);
          setMessages((prev) => [
            ...prev,
            { sender: "user", content: chatName },
          ]);

          sendPrompt({
            query: chatName,
            user_id: userId,
            chat_id: createdChatId,
            document: selectedDocument,
            tags: tags,
            mode: selectedDocument ? "reference-document" : "general-query",
          });
        } else {
          console.error(res.data.msg);
        }
      } else {
        setMessages((prev) => [...prev, { sender: "user", content: chatName }]);
        sendPrompt({
          query: chatName,
          user_id: userId,
          chat_id: chatId,
          document: selectedDocument,
          tags: tags,
          mode: selectedDocument ? "reference-document" : "general-query",
        });
      }
    } catch (error: any) {
      const errorMessage =
        error.response?.data?.msg || "An unexpected error occurred.";
      setResponse(`Error: ${errorMessage}`);
      console.error(error);
    }
  };

  const placeholders = INPUT_PLACEHOLDERS

  return (
    <div className={`flex flex-row w-full h-full ${sourceSans3.className}`}>
      <div className="bg-orange-500 blur-[200px] w-full h-[100px] absolute" />
      <div
        className={`w-full h-full flex flex-col items-center bg-[#27272aa8] ${
          !hid ? "justify-center" : "justify-end"
        }`}
      >
        {hid ? (
          <div className="flex flex-col p-10 overflow-auto bg-[#27272aa8] z-10 h-full w-full fadedScroll rounded-lg rounded-b-none relative">
            <Loader loading={loading} loadingStates={loadingStates} />
            {messages.map((msg, index) => (
              <Message
                key={index}
                sender={msg.sender === "user" ? userName : "Menrva"}
                message={
                  msg.sender === "ai" ? (
                    <ReactMarkdown
                      remarkPlugins={[remarkGfm]}
                      className="prose markdown"
                    >
                      {msg.content}
                    </ReactMarkdown>
                  ) : (
                    msg.content
                  )
                }
                avatar={
                  msg.sender === "user"
                    ? "/Screenshot 2024-11-24 173312.png"
                    : "/Colorful_Brain_Digital_World_Technology_Logo__3_-removebg-preview.png"
                }
                isSender={msg.sender === "user"}
                div= {false}
                divVal={
                  msg.sender === "ai"
                  ? <Image
                  src={"/Colorful_Brain_Digital_World_Technology_Logo__3_-removebg-preview.png"}
                  alt="Avatar"
                  className="w-10 h-10 rounded-full object-cover"
                />
                  : <Avatar name={userName} size={30} />}
              />
            ))}
          </div>
        ) : (
          <div />
        )}
        {!hid && (
          <div className="w-full">
            <p className="text-5xl text-[#b6b6b6] w-full text-center">
              {`Hi there, ${userName}`}
            </p>
            <br />
            <p className="text-3xl text-center mb-8">What can I help with?</p>
          </div>
        )}
        {!loading ? (
          <>
            <div className="w-1/3 flex items-start mt-2 gap-1">
            {selectedDocument ? (
              <div className="bg-blue-200 text-blue-400 p-1 text-sm mb-2" style={{ borderRadius: "5px", display: "flex", alignItems: "center" }}>
                <button
                  onClick={() => setSelectedDocument(null)}
                  className="text-blue-700 font-extrabold mr-2"
                  aria-label="Remove document"
                >
                  ✕
                </button>
                <small>Document: </small>
                {selectedDocument.replace("documents/", "").replace(".pdf", "").replaceAll("_", " ").slice(0, 20) + '...'}
              </div>
            ) : ""}
            {tags.map((tag, key) => <span key={key} className='bg-purple-200 text-purple-400 p-1 text-sm mb-2' style={{
              borderRadius: "5px"
            }}><small>Tag: </small>{tag}</span>)}
            </div>
          <PlaceholdersAndVanishInput
            placeholders={placeholders}
            onChange={(e) => setChatName(e.target.value)}
            onSubmit={handleSubmit}
            onInsertDoc={() => {
              router.replace('/dashboard/filemanager')
            }}
            onReferDoc={() => setShowDialog(true)}
          />
          </>
        ) : (
          ""
        )}
        <Dialog showDialog={showDialog}
          onDocumentSelect={(doc: string) => {
            setSelectedDocument(doc)
            setShowDialog(false)
          }} 
          onClose={() => setShowDialog(false)}
        />
      </div>
    </div>
  );
};

export default Dashboard;
