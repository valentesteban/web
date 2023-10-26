import localFont from "next/font/local";
import { Inter } from "next/font/google";

export const berkeley = localFont({
  src: "../styles/Berkeley-Regular.ttf",
  variable: "--font-berkeley",
  weight: "300 900",
  display: "swap",
  style: "normal",
});

export const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});
