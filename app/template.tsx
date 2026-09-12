"use client";
import dynamic from "next/dynamic";
import Footer from "./_components/Footer";

const Header = dynamic(() => import("./_components/Header"), { ssr: false });

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="relative h-full flex-1 flex flex-col items-center">
        {children}
      </main>
      <Footer />
    </>
  );
}
