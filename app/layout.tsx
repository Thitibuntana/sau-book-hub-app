import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// import NavBarMain from "@/components/NavBarMain";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SAU Book Hub",
  description: "Awesome App!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <br />
        <h1 className="text-4xl text-blue-800 text-center font-bold">
          SOUTHEAST ASIA UNIVERSITY
        </h1>
        <br />
        <br />
        {children}
        <hr />
        <br />
        <h1 className="text-xl text-blue-800 text-center font-bold">
          Created by Thitibuntana
          <br />
          Copyrighted © 500 B.C.
        </h1>
      </body>
    </html>
  );
}
