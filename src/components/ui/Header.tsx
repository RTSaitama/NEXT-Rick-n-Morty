import Link from "next/link";

export const Header = () => {
  return (
      <header className="flex w-full h-16 bg-blue-300 justify-between items-center text-black text-3xl p-4 rounded-lg">
        <h1>Rick & Morty Wiki</h1>
        <nav className="navigation w-[30%] justify-between gap-4 flex">
         <Link href="/home">
           Characters
         </Link>
         <Link href="/episode">
           Episode
         </Link>
          <Link href="/location">
           Location
         </Link>
        </nav>
       </header> 
  )
}