import { Fira_Code as FontMono, Inter as FontSans } from "next/font/google";
import { Playfair_Display, Montserrat, Inter, Roboto, Source_Sans_3 } from "next/font/google";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const playfairDisplay = Playfair_Display({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'], // Specify the weights you need
  });

  export const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'], // Specify the weights you need
  });

export const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], // Specify the weights you need
});

export const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '900', '700'], // Specify the weights you need
});

export const sourceSans3 = Source_Sans_3({
  subsets: ['latin'],
  weight: ['400', '500', '900', '700'], // Specify the weights you need
  variable: "--font-source_sans_3",
});