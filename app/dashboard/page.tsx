"use client"
import Circles from "@/components/widgets/Circles";
import Light from "../../components/widgets/Light";
import { FaPaperclip } from "react-icons/fa6";
import { IoDocumentTextOutline } from "react-icons/io5"
import { sourceSans3 } from "@/config/fonts";
import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";

const Dashboard = () => {
  const placeholders = [
    "What's the first rule of Fight Club?",
    "Who is Tyler Durden?",
    "Where is Andrew Laeddis Hiding?",
    "Write a Javascript method to reverse a string",
    "How to assemble your own PC?",
  ];
 
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitted");
  };

  return (
    <div className={`bg-gradient-to-bl from-[rgba(255,150,60,0.49)] via-transparent to-transparent flex flex-row h-full ${sourceSans3.className} `}>

      <div className="w-full h-full flex flex-col items-center justify-center">
        <div className="w-1/2 ">
          <p className="text-5xl text-[#b6b6b6] text-center">Hi there, User</p> <br />
          <p className="text-3xl text-center">What can I help with?</p>
        </div> <br />
        <PlaceholdersAndVanishInput
        placeholders={placeholders}
        onChange={handleChange}
        onSubmit={onSubmit}
      />
      </div>
    </div>
  );
};

export default Dashboard;
