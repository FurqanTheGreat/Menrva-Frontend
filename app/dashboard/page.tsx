"use client"
import { sourceSans3 } from "@/config/fonts";
import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";

const Dashboard = () => {
  const placeholders = [
    "Explain the significance of golgi bodies.",
    "What was the significance of the subcontinent in WW2.",
    "Would the british have ?",
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
    <div className={`flex flex-row h-full ${sourceSans3.className} `}>
      <div className="bg-orange-500 blur-[200px] w-full h-[100px] fixed">
        
      </div>
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
