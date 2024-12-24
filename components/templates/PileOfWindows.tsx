import Image from "next/image";

const PileOfWindows = () => {
  return (
    <>
            <Image
              src="/Screenshot 2024-11-29 at 2.56.17 PM 1.png"
              alt="screen"
              width={510}
              height={180}
              className=" absolute left-[0%] bottom-[50px] z-10"
            ></Image>
            <Image
              src="/Screenshot 2024-11-29 at 2.57.55 PM 1.png"
              alt="screen"
              width={628}
              height={180}
              className=" absolute left-[28%] bottom-[50px] "
            ></Image>
            <Image
              src="/Screenshot 2024-11-29 at 2.59.28 PM 1.png"
              alt="screen"
              width={300}
              height={250}
              className=" absolute left-[59%] bottom-[50px] "
            ></Image>
            <Image
              src="/Screenshot 2024-11-29 at 3.01.29 PM 2.png"
              alt="screen"
              width={400}
              height={800}
              className=" absolute left-[73%] z-8 bottom-[50px] "
            ></Image>
            <Image
              src="/Screenshot 2024-11-29 at 3.04.40 PM 1.png"
              alt="screen"
              width={300}
              height={600}
              className=" absolute left-[82.2%] overflow-hidden z-0 bottom-[50px] "
            ></Image>
            <Image
              src="/Rectangle 11.png"
              alt="screen"
              width={5000}
              height={180}
              className=" absolute left-[0%] bottom-[-50px] z-10 "
            ></Image>
    </>
  );
};

export default PileOfWindows;