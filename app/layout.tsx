import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import clsx from "clsx";
import { FloatingNavbar } from "./ui/Navbar";
import { playfairDisplay } from "@/config/fonts";
import { fontSans } from "@/config/fonts";


export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >

              {children}
      </body>
    </html>
  );
}
