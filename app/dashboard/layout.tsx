
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-row w-full h-screen">
      <div className="bg-[#5A5A5A] w-fit h-screen p-5 rounded-r-md ">
        Hi
      </div>
      <div className="p-10 w-full h-full">{children}</div>
    </div>
  );
}
