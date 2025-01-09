"use client"
import Image from "next/image";
import { playfairDisplay, sourceSans3 } from "@/config/fonts";
import NavBar, { NavListItem } from "@/components/widgets/NavBar";
import PileOfWindows from "@/components/templates/PileOfWindows";
import { Vortex } from "@/components/ui/vortex";
import { Highlight } from "@/components/ui/hero-highlight";
import { SparklesPreview } from "../components/app_ui/Sparkle";
import { Testimonials } from "../components/app_ui/Testimonials";
import Link from "next/link";
import { FlipWords } from "@/components/ui/flip-words";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import FeaturesSection from "@/components/features-section-demo-1";
import Hr from "../components/app_ui/Hr";

const words = ["Productive", "Efficient", "Successful", "Focused", "Rewarding"];

const navigationItems: NavListItem[] = [
  { label: "Our Mission", href: "#about" },
  { label: "Features", href: "#services" },
  { label: "Testimonials", href: "#pricing" },
];

export default function Home() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <div
      className={`${sourceSans3.className} bg-black overflow-hidden`}
    >
      <main className=" bg-black flex justify-center ">
        <NavBar items={navigationItems} />
      </main>

      <div
        className={` min-h-screen sm:mb-[100px] p-[50px] overflow-hidden ${sourceSans3.className} `}
      >
       <Vortex
        backgroundColor="black"
        className="flex items-center flex-col justify-center px-2 md:px-10 w-full mt-[50px] h-full"
       >
        <div className="relative top-[40px] z-10 flex justify-center items-center text-[white] flex-col px-6 ">
          <Highlight className={` ${sourceSans3.className} hidden w-full mb-[20px] `}>
          <div className="text-[white] w-full p-[15px] text-center rounded-[10px] text-[0.8rem] md:text-[1rem] box-border tracking-wide ">
            Generating next-gen teaching solutions
          </div>
          </Highlight>
          <hr className="w-full" />
          <h1 className="text-white text-center text-3xl mt-[20px] md:text-4xl lg:text-6xl tracking-[1px] leading-tight mb-4">
            Empowering Students with <br />
          </h1>
          
          <h1 className="mt-[40px] text-white-700 md:text-6xl text-center text-5xl lg:text-8xl font-semibold md:font-bold">
            NEXT GEN
          </h1>
          <h1 className="text-white text-3xl mt-[40px] md:text-4xl text-center lg:text-6xl tracking-[1px] leading-tight mb-4">
            AI Solutions
          </h1>
          <hr className=" mt-[35px] mb-[35px] w-[60%] " />
          <Link href={"/account/signup"}>
          <button className={`bg-[#C87500] bg-opacity-70 hover:bg-[#ad7527] p-[20px] transition-all w-fit text-white text-[20px] py-2 px-6 rounded-[10px]`}>
            Get Started
          </button>
          </Link>
        </div>
        </Vortex>
      </div>
      <Hr />
      <section className="bg-black py-16 h-auto text-white">
        <div className="max-w-7xl mx-auto h-auto px-4">
          <SparklesPreview>
            Our Mission
          </SparklesPreview>

          <div className="mt-[100px] grid grid-cols-1 lg:grid-cols-3 gap-8  place-items-center">
            <BackgroundGradient className="rounded-[22px] max-w-sm p-1 text-center" bm="50px">
            <Image
                    alt={"img"}
                    src={"/image.png"}
                    className={"w-full h-[500px] object-contain"}
                    width={500}
                    height={500}
                  />
                  <div className="p-4">
                    <h3 className="text-lg text-center">Helping Students Progress</h3>
                  </div>
            </BackgroundGradient>
            <BackgroundGradient className="rounded-[22px] max-w-sm p-1 text-center" bm="50px">
            <Image
                    alt={"img"}
                    src={"/image-1.png"}
                    className={"w-full h-[500px] object-contain"}
                    width={500}
                    height={500}
                  />
                  <div className="p-4">
                    <h3 className="text-lg text-center">Supplement, NOT replacement</h3>
                  </div>
            </BackgroundGradient>
            <BackgroundGradient className="rounded-[22px] max-w-sm p-1 text-center" bm="50px">
            <Image
                    alt={"img"}
                    src={"/image (2).png"}
                    className={"w-full h-[500px] object-contain"}
                    width={500}
                    height={500}
                  />
                  <div className="p-4">
                    <h3 className="text-lg text-center">Working for a better Future</h3>
                  </div>
            </BackgroundGradient>
          </div>
          <div className="flex items-center justify-between px-8">
            <div className="lg:w-[60%] w-full z-[1]">
              <h2 className="text-white text-center sm:text-left text-4xl md:text-4xl tracking-[1px] leading-tight mb-4">
                Making Studying More <FlipWords words={words} className=" text-white " /> <br />
                <br />
              </h2>
              <h3 className="mt-4 ml-5 sm:text-justify text-[22px]">
              Making studying more effective with Menrva involves utilizing its intelligent, interactive features to streamline your learning process. Menrva acts as a personalized tutor, answering your questions, explaining concepts, and providing instant feedback to help you grasp difficult topics. It enables you to break complex material into simpler parts, stay organized with study schedules, and keep distractions at bay.
              </h3>
            </div>
            <Image
              src="/image-3.png"
              alt="screenshot"
              width={400}
              height={1000}
              className="opacity-88 hidden lg:block pl-[50px] z-[10] "
            />
          </div>
        </div>
      </section>
      <section className="bg-black relative sm:block hidden py-[100px] mb-[100px] mt-[200px] lg:mt-[0] h-auto text-white">
        <PileOfWindows />
      </section>
      <Hr />
      <div className=" mt-[100px] ">
      <SparklesPreview>
          Key Features
          </SparklesPreview>
      <FeaturesSection />
      </div>
      <div ref={ref} className={` ${sourceSans3.className} w-full p-2 pt-4 grid grid-cols-1 sm:grid-cols-3 mt-[200px] mb-[100px] gap-5`}>
      <p className="dm-sans text-2xl md:text-3xl font-semibold text-center text-glow mb-[20px] md:mb-[0]">
        {inView ? <CountUp end={500} duration={2} /> : "0"}K+
        <span className="block text-2xl md:text-3xl"> Conversations</span>
      </p>
      <p className="dm-sans text-2xl md:text-3xl font-semibold text-center text-glow mb-[20px] md:mb-[0]">
        {inView ? <CountUp end={120} duration={3} /> : "0"}K
        <span className="block text-2xl md:text-3xl"> Active Users</span>
      </p>
      <p className="dm-sans text-2xl md:text-3xl font-semibold text-center text-glow mb-[20px] md:mb-[0]">
        {inView ? <CountUp end={200} duration={3.5} /> : "0"}K
        <span className="block text-2xl md:text-3xl"> Questions Answered</span>
      </p>
    </div>
    <Hr />
      <section className="relative text-white mt-20 mb-[100px] py-16 px-8">
      <SparklesPreview>
            What Our Learners Say
          </SparklesPreview>
        <Testimonials />
      </section>
      <Hr className=" mb-[100px] " />
      <footer className=" flex no-underline w-full h-fit text-white font-medium justify-between items-center px-[50px] py-4 text-md overflow-x-hidden ">
        <div className=" flex justify-start text-md text-neutral-400 font-light tracking-[0.5px] items-start w-full flex-col gap-4 px-[25px] md:px-[75px] ">
          <div className=" flex text-2xl tracking-[1px] justify-start items-start ">
            <img src="/Colorful_Brain_Digital_World_Technology_Logo__3_-removebg-preview.png" alt="Microsoft Icon" width={40} height={40} /> 
            <h1 className=" ml-[10px] text-white text-2xl font-semibold ">Menrva AI</h1>
          </div>
          <p className=" text-md text-neutral-400 font-light tracking-[0.5px] ">A Product by Team-Menrva</p>
          <p><a href="https://github.com/FurqanTheGreat" className=" text-[rgba(255,150,60,0.49)] hover:text-orange-500 " target="_blank">Muhammad Furqan</a> | <a href="https://github.com/Hammad-Hab" className=" text-[rgba(255,150,60,0.49)] hover:text-orange-500 " target="_blank">Hammad Ali</a> | <a href="https://github.com/SyedHunainAli" className=" text-[rgba(255,150,60,0.49)] hover:text-orange-500 " target="_blank">Hunain Ali</a></p>
        </div>
      </footer>
    </div>
  );
}
