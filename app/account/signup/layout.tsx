export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <div className={` w-full h-full flex justify-end relative bg-cover bg-fixed md:bg-[url("/assortment-teacher-s-day-elements.jpg")] `}>
        <div
            className="w-full h-full flex justify-end absolute inset-0 bg-black opacity-40 rounded-lg shadow-2xl"
        ></div>
        <div className="w-full h-[100vh] flex flex-row justify-center xl:justify-end items-center md:mx-[10%] relative z-10">{children}</div>
    </div>
    );
  }