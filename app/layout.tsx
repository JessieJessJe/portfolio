import type { Metadata } from "next";
import { Karla, Nanum_Myeongjo } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"

const garamond = Nanum_Myeongjo({subsets: ["latin"], weight:"400", variable:"--font-garamond"})
const karla = Karla({subsets: ["latin"], weight:"400", variable:"--font-karla"})

export const metadata: Metadata = {
  title: "Jessie Han | Product Designer",
  description: "Hey there, welcome to my portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body className={`${garamond.variable} ${karla.variable}`}>{children}<Analytics /></body>
    </html>
  );
}
