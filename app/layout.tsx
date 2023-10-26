import "@/styles/globals.css";
import localFont from "next/font/local";
import { Metadata } from "next";

const berkeley = localFont({
  src: [
    {
      path: "../styles/fonts/Berkeley-Regular.ttf",
      weight: "100",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  title: "Esteban Valente",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang={"en"}>
      <body className={berkeley.className}>{children}</body>
    </html>
  );
}
