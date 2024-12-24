import Image from "next/image";
import { playfairDisplay } from "@/config/fonts";
import NavBar, { NavListItem } from "@/components/widgets/NavBar";
import Card from "@/components/widgets/Card";
import PileOfWindows from "@/components/templates/PileOfWindows";
import Review from "@/components/widgets/Review";
import Light from "@/components/widgets/Light";
import Circles from "@/components/widgets/Circles";

const navigationItems: NavListItem[] = [
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Pricing", href: "#pricing" },
];

export default function Home() {
  return (
    <div
      className={`${playfairDisplay.className} bg-[#171717] bg-gradient-to-r from-[#171717] to-[#171717] overflow-hidden  `}
    >
      <Light
            color="#FF9974"
            className="w-[500px] h-[500px] rounded-full z-10 opacity-50 right-0 top-0 -translate-y-52 translate-x-52" 
            blurRadius={100}
          />
      <main className="bg-black">
        <NavBar items={navigationItems} />
      </main>

      <div
        className={` min-h-screen p-[50px] overflow-hidden ${playfairDisplay.className} mb-[200px]`}
      >
    
        <Circles className='h-[600px] w-[600px] border-2 -z-10'/>
        <div className="relative top-[100px] z-10 flex text-[white] flex-col px-6 py-12 mb-[200px]">
          <div className="text-[white] w-fit p-[15px] pl-[20%] pr-[50px] rounded-[10px] text-[18px] box-border tracking-wide mb-[75px] bg-gradient-to-r from-[rgba(255,119,0,0)] via-[rgba(255,150,60,0.49)] to-[rgb(255,182,121)] bg-center bg-opacity-75">
            Generating next-gen teaching solutions
          </div>
          <hr className="w-[70%]" />
          <h1 className="text-white text-2xl mt-[50px] md:text-6xl tracking-[1px] leading-tight mb-4">
            Empowering Students with <br />
          </h1>
          
          <h1 className="mt-[40px] text-white-700 text-8xl font-bold">
            NEXT GEN
          </h1>
          <h1 className="text-white text-4xl mt-[40px] md:text-6xl tracking-[1px] leading-tight mb-4">
            AI Solutions
          </h1>
          <hr className=" mt-[35px] mb-[35px] w-[50%] " />
          <button className="bg-[#C87500] bg-opacity-70 hover:bg-[#ad7527] p-[20px] transition-all w-fit text-white text-[20px] py-2 px-6 rounded-[10px]">
            Get Started
          </button>
        </div>
      </div>
      <section className="bg-[#1E1E1E] py-16 h-auto text-white">
        <div className="max-w-7xl mx-auto h-auto px-4">
          <h2 className="text-white text-4xl mt-[50px] md:text-4xl tracking-[1px] leading-tight mb-4">
            Our Mission
          </h2>
          <hr className="w-[40%]" />
          <hr className="w-[40%] mt-[15px] right-[50px] relative " />
          <Image
            src="/Clip path group.png"
            alt="circle"
            height={350}
            width={350}
            className=" absolute left-[40%] top-[2260px] z-[1] "
          ></Image>

          <div className="mt-[100px] grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card
              text="Helping Students Progress"
              imageSrc="/image.png"
              className=""
            />
            <Card
              text="Supplement, NOT replacement"
              imageSrc="/image-1.png"
              className="bottom-[50px]"
            />
            <Card
              text="Supplement, NOT replacement"
              imageSrc="/image (2).png"
              className="bottom-[90px]"
            />
          </div>
          <hr className="float-right relative left-[50px] w-[40%]" />
          <hr className=" mt-[15px] relative left-[500px] float-right w-[40%]" />
          <hr className=" mt-[150px] relative w-[40%]" />
          <hr className=" mt-[15px] right-[50px] relative w-[40%]" />
          <div className="flex items-center justify-between px-8">
            <div className="w-[60%]">
              <h2 className="text-white text-4xl md:text-4xl tracking-[1px] leading-tight mb-4">
                Making Studying More Productive <br />
                <br />
              </h2>
              <h3 className="mt-4 ml-5 text-[24px]">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo.
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
        <PileOfWindows />
      </section>
        <Image
          src="/Clip path group.png"
          alt="arrow_up"
          height={350}
          width={350}
          className="absolute rotate-45"
        ></Image>
      <section className="relative text-white mt-20 py-16 px-8">
        <h2 className="text-5xl font-bold text-center mb-12">
          What Our Learners Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Review citation="Emma R., High School Student" nstars={4}>
            Menrva has completely changed how I study. Uploading my notes and
            having the AI tutor guide me step-by-step has been a game-changer. I
            feel more confident in my exams now!
          </Review>
          <Review citation="John D., Software Engineer (Google)" nstars={5}>
            As a working professional, I struggled to find time for structured
            learning. Menrva{"'"}s personalized approach lets me learn on my own
            schedule, and the AI tutor feels like a real instructor.
          </Review>

          <Review citation="Sana A., University Applicant (MIT)" nstars={4}>
            I used Menrva to prepare for my university entrance exams. The
            insights and detailed explanations it provided made even the hardest
            topics easier to understand. Highly recommended
          </Review>
        </div>
      </section>
    </div>
  );
}
