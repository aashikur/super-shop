import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
// import Navbar from "./components/navbar";
import SessionWrapper from "@/app/SessionWrapper";
import Navbar from "@/app/components/navbar/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "S-Shop | All You Need In One Place",
  description: "All You Need In One Place",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >

        <SessionWrapper>
          <Navbar />

          {children}
          <Footer />

        </SessionWrapper>
      </body>
    </html>
  );
}
