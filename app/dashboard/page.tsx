import Circles from "@/components/widgets/Circles";
import Light from "../../components/widgets/Light";
import { FaPaperclip } from "react-icons/fa6";
import { IoDocumentTextOutline } from "react-icons/io5"

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
            Here are some suggestions for getting started
          </p>
        </div>
        <div className="bg-white mt-5 z-50 w-1/2 rounded-md">
          <textarea
            placeholder="All it takes is a question mark..."
            className="w-full rounded-md p-3 text-black placeholder:font-playfair font-playfair text-md outline-none resize-none"
          ></textarea>
          <div className="border-t border-gray-200 p-2">
            <span className="p-2 text-sm text-gray-400 hover:text-gray-500 cursor-pointer"><FaPaperclip className="inline"/> Insert Document</span>
            <span className="p-2 text-sm text-gray-400 hover:text-gray-500 cursor-pointer"><IoDocumentTextOutline className="inline"/> Insert Document</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
