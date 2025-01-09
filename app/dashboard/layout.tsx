import { Navbar } from "../../components/app_ui/Sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-row w-full h-screen" suppressHydrationWarning>
      <div className=" w-fit h-screen rounded-r-md ">
        <Navbar />
      </div>
      <div className=" w-full h-full">{children}</div>
    </div>
  );
}