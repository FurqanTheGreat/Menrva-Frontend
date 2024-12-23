import { div } from "framer-motion/client";
import Image from "next/image";
import { playfairDisplay } from "@/config/fonts";

export default function Home() {
  return (
    <div className={`${playfairDisplay.className} bg-[#171717] bg-gradient-to-r from-[#171717] to-[#171717] overflow-hidden  `}>
      <main className="bg-black">
        <nav className="flex bg-transparent max-w-fit text-[16px] mx-auto justify-center items-center space-x-10 px-[150px] inset-x-0 border border-[2px] border-[#656565] fixed top-10 backdrop-blur-md transition-colors rounded-full duration-300 z-20 flex justify-between items-center py-3.5">
          <div className="text-white text-[18px]">MenrvaAi</div>
          <ul className="flex space-x-8 text-white">
            <li><a href="#about" className="hover:text-orange-500">About Us</a></li>
            <li><a href="#services" className="hover:text-orange-500">Our Services</a></li>
            <li><a href="#pricing" className="hover:text-orange-500">Pricing</a></li>
          </ul>
        </nav>
      </main>
      <div className={` min-h-screen p-[50px] overflow-hidden ${playfairDisplay.className} mb-[200px]`}>
        <Image src="/Ellipse 1.png" alt="circle" height={1000} width={1000} className=" absolute top-[100px] "></Image>
        <div className="relative top-[100px] z-10 flex text-[white] flex-col px-6 py-12 mb-[200px]">
          <div className="text-[white] p-[15px] pl-[20%] pr-[50px] rounded-[10px] text-[18px] w-[60%] box-border tracking-wide mb-[75px] bg-gradient-to-r from-[rgba(255,119,0,0)] via-[rgba(255,150,60,0.49)] to-[rgb(255,182,121)] bg-center bg-opacity-75">
            Generating next-gen teaching solutions
          </div>
          <hr className=" w-[70%] "/>
          <h1 className="text-white text-4xl mt-[50px] md:text-6xl tracking-[1px] leading-tight mb-4">
            Empowering Students with <br />
          </h1>
          <Image src="/Rectangle 2.png" alt="blur" width={700} height={700} className="bottom-[200px] absolute left-[60%]"></Image>
          <h1 className="mt-[40px] text-white-700 text-8xl font-bold">NEXT GEN</h1> 
          <h1 className="text-white text-4xl mt-[40px] md:text-6xl tracking-[1px] leading-tight mb-4">AI Solutions</h1>
          <hr className=" mt-[35px] mb-[35px] w-[50%] " />
          <button className="bg-[#C87500] bg-opacity-70 hover:bg-orange-600 p-[20px] px-[30px] w-fit text-white text-[20px] py-2 px-6 rounded-[10px]">
            Get Started
          </button>
        </div>
      </div>
      <section className="bg-black py-16 h-auto text-white">
       <div className="max-w-7xl mx-auto h-auto px-4">
          <h2 className="text-white text-4xl mt-[50px] md:text-4xl tracking-[1px] leading-tight mb-4">Our Mission</h2>
          <hr className=" w-[40%] " />
          <hr className=" w-[40%] mt-[15px] right-[50px] relative " />
          <Image src="/Clip path group.png" alt="circle" height={350} width={350} className=" absolute left-[40%] top-[2260px] z-[1] "></Image>
          <div className="mt-[100px] grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 w-[300px] relative left-[90px] rounded-lg overflow-hidden shadow-md">
              <img
              src="/image.png"
              alt="Helping Students Progress"
              className="w-full h-[500px] object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg text-center">Helping Students Progress</h3>
              </div>
            </div>

            <div className="bg-white/10 w-[300px] relative left-[90px] bottom-[50px] rounded-lg overflow-hidden shadow-md">
              <img
              src="/image-1.png"
              alt="Helping Students Progress"
              className="w-full h-[500px] object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg text-center">Supplement, NOT replacement</h3>
              </div>
            </div>

            <div className="bg-white/10 w-[300px] relative left-[90px] bottom-[90px] rounded-lg overflow-hidden shadow-md">
              <img
              src="/image (2).png"
              alt="Helping Students Progress"
              className="w-full h-[500px] object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg text-center">Working for a better Future</h3>
              </div>
            </div>
          </div>
          <hr className="float-right relative left-[50px] w-[40%]"/>
          <hr className=" mt-[15px] relative left-[500px] float-right w-[40%]" />
          <hr className=" mt-[150px] relative w-[40%]" />
          <hr className=" mt-[15px] right-[50px] relative w-[40%]" />
          <div className="flex items-center justify-between px-8">
            <div className="w-[60%]">
              <h2 className="text-white text-4xl md:text-4xl tracking-[1px] leading-tight mb-4">
                Making Studying More Productive <br /><br />
              </h2>
              <h3 className="mt-4 ml-5 text-[24px]">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
              </h3>
            </div>
            <Image
              src="/image-3.png"
              alt="screenshot"
              width={400}
              height={1000}
              className="opacity-88 z-10 pl-[50px] "
            />
          </div>
       </div>
      </section>
      <section className="bg-black relative py-[100px] h-auto text-white">
        <Image src="/Screenshot 2024-11-29 at 2.56.17 PM 1.png" alt="screen" width={510} height={180} className=" absolute left-[0%] bottom-[50px] z-10"></Image>
        <Image src="/Screenshot 2024-11-29 at 2.57.55 PM 1.png" alt="screen" width={628} height={180} className=" absolute left-[28%] bottom-[50px] "></Image>
        <Image src="/Screenshot 2024-11-29 at 2.59.28 PM 1.png" alt="screen" width={300} height={250} className=" absolute left-[59%] bottom-[50px] "></Image>
        <Image src="/Screenshot 2024-11-29 at 3.01.29 PM 2.png" alt="screen" width={400} height={800} className=" absolute left-[73%] z-8 bottom-[50px] "></Image>
        <Image src="/Screenshot 2024-11-29 at 3.04.40 PM 1.png" alt="screen" width={300} height={600} className=" absolute left-[82.2%] overflow-hidden z-0 bottom-[50px] "></Image>
        <Image src="/Rectangle 11.png" alt="screen" width={5000} height={180} className=" absolute left-[0%] bottom-[-50px] z-10 "></Image>
      </section>
      <section className="relative text-white mt-20 py-16 px-8">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Learners Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
            <p className="mb-4">"Menrva has completely changed how I study. Uploading my notes and having the AI tutor guide me step-by-step has been a game-changer. I feel more confident in my exams now!"</p>
            <p className="font-semibold">— Emma R., High School Student</p>
            <div className="flex mt-4">
              <span className="text-yellow-400">★★★★★</span>
            </div>
          </div>
          
          <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
            <p className="mb-4">"As a working professional, I struggled to find time for structured learning. Menrva's personalized approach lets me learn on my own schedule, and the AI tutor feels like a real instructor."</p>
            <p className="font-semibold">— John D., Software Engineer (Google)</p>
            <div className="flex mt-4">
              <span className="text-yellow-400">★★★★★</span>
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
            <p className="mb-4">"I used Menrva to prepare for my university entrance exams. The insights and detailed explanations it provided made even the hardest topics easier to understand. Highly recommended!"</p>
            <p className="font-semibold">— Sana A., University Applicant (MIT)</p>
            <div className="flex mt-4">
              <span className="text-yellow-400">★★★★★</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}