import React from "react";
import Link from "next/link";


export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <header className="flex w-full h-16 bg-blue-300 justify-around items-center text-black text-3xl">
        <Link href="/heroes">
        Heroes
        </Link>
         <Link href="/series">
        Series
        </Link>
         <Link href="/another">
        Some another Page
        </Link>
      </header>
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
      </main>
      <footer className="row-start-3 bg-amber-300 h-16 w-full flex gap-[24px] flex-wrap items-center justify-center">
      </footer>
    </div>
  );
}
