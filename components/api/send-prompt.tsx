import cookie from "cookiejs";
import axios, { AxiosRequestConfig } from "axios";

interface SendPromptParams {
  query: string;
  chat_id: string;
  user_id: string;
  mode?: string;
  tags: string[];
  document?: string | null;

  onRequestStart: () => void;
  onRequestDataRetention: (data: string) => void;
  onRequestEnd: () => void;
}

const sendPromptReqeust = async (params: SendPromptParams): Promise<void> => {
  const {
    query,
    chat_id,
    user_id,
    mode = "QUERY",
    document = null,
    tags,
  } = params;

  const token = cookie.get("jwt");

  if (!token) {
    console.error("JWT token is missing");
    return;
  }

  const headers: AxiosRequestConfig = {
    headers: { Authorization: `Bearer ${token}`,   'ngrok-skip-browser-warning': 'true' },
    responseType: "json",
  };
   
  try {
    params.onRequestStart();

    const aiResponse = await axios.post(
      "https://bee-national-rationally.ngrok-free.app/prompt",
      { query, chat_id, user_id, mode, document, tags },
      headers
    );

    const aiMessage = aiResponse.data;
    params.onRequestDataRetention(aiMessage);
    // setMessages((prev) => [...prev, { sender: "ai", content: aiMessage }]);

    await axios.post(
      "https://pegasus-loyal-mostly.ngrok-free.app/chat_mng/insert_msg",
      { chat_id, user_id, user: query, ai: aiMessage, tags },
      headers
    );
  } finally {
    params.onRequestEnd();
  }
};


export {
    sendPromptReqeust
}