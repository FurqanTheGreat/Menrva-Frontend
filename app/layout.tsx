import "./globals.css";
import { Playfair_Display, Inter } from 'next/font/google'
import { sourceSans3 } from "@/config/fonts";

const playfair = Playfair_Display({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair'
})

const inter = Inter({
  weight: ['100', '300', '600', '900'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={`antialiased ${playfair.variable} ${inter.variable} ${sourceSans3.variable} overflow-x-hidden fadedScroll`}
      >

              {children}
      </body>
    </html>
  );
}
