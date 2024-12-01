import Circles from "@/components/widgets/Circles";
import Light from "../../components/widgets/Light";
import { FaPaperclip } from "react-icons/fa6";
import { IoDocumentTextOutline } from "react-icons/io5";
import InputArea, { FooterTool } from "@/components/molecules/InputArea";
import { NULL_EVENT_HANDLER } from "@/components/utils";
import ChatSuggestions, { Suggestion } from "@/components/molecules/ChatSuggestions";

/**
 * TODO: Replace NULL handlers with meaningful event handlers
 */
const inputAreaFooterTools: FooterTool[] = [
  {
    icon: <FaPaperclip />,
    label: "Insert Document",
    onClick: NULL_EVENT_HANDLER,
  },
  {
    icon: <IoDocumentTextOutline />,
    label: "Reference Document",
    onClick: NULL_EVENT_HANDLER,
  },
];

/**
 * TODO: These suggestions will be dynamically generated by the LLM. The LLM Server is supposed to send these suggestions
 */
const suggestions: Suggestion[] = [
  {label: "Harry Potter", text: "Lorem Inpsum something blah blah blah"},
  {label: "Principia Mathematica", text: "Lorem Inpsum something blah blah blah"},
  {label: "Das Kapital", text: "Lorem Inpsum something blah blah blah"},
  {label: "Linear Algebra", text: "Lorem Inpsum something blah blah blah"},
  {label: "History of Philosophy", text: "Lorem Inpsum something blah blah blah"}
]

const Dashboard = () => {
  return (
    <div className="bg-[--background] flex flex-row h-full">
      <div className="absolute flex flex-col items-center w-1/2">
        <Circles>
          <Light
            color="#FF9974"
            className="w-[500px] h-[500px] rounded-full -z-10 opacity-50 -translate-x-40 -translate-y-40"
            blurRadius={100}
          />
        </Circles>
      </div>

      <div className="w-full h-full flex flex-col items-center justify-center">
        <div className="w-1/2 font-playfair">
          <p className="text-6xl">Hi there, User</p>
          <p className="text-3xl text-[#b6b6b6]">How can I help?</p>
          <p className="text-xl font-inter mt-10 font-light">
            Here are some suggestions for getting started:
          </p>
        </div>
        <div className="w-3/5 m-2">
          <ChatSuggestions suggestions={suggestions} onSuggestionSelect={NULL_EVENT_HANDLER} />
        </div>
        <InputArea
          placeholder="All it takes is a question mark..."
          footerTools={inputAreaFooterTools}
        />
      </div>
    </div>
  );
};

export default Dashboard;
