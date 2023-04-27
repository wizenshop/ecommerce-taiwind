import Image from "next/image";
import { Inter } from "next/font/google";
import { Header } from "@/components/Header";
import "./globals.css"
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Header />
      <h1>Hello World!</h1>
    </>
  );
}
