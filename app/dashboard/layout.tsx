import { FaCogs, FaFile } from "react-icons/fa";
import { PiGraph } from "react-icons/pi";
import { AiFillWechatWork } from "react-icons/ai";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex flex-row w-full h-screen">
      <div className="bg-[#5A5A5A] w-fit h-screen">
        <div className="h-1/2 p-5 text-xl flex flex-col gap-5">
          <span><FaCogs/></span>
          <span><PiGraph/></span>
          <span><FaFile/></span>
          <span><AiFillWechatWork/></span>
        </div>
        
        <div className="h-1/2 p-2 flex flex-col-reverse">
          <div className="w-[50px] h-[50px] rounded-full bg-cover bg-top" style={{
            backgroundImage: `url("https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`
          }}>
          </div>
        </div>
      </div>

      <section className="w-full h-full p-0.5 bg-[#5A5A5A] ">{children}</section>
    </main>
  );
}
