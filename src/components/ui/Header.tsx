import Link from "next/link";

export const Header = () => {
  return (
<header className=" ">
      <h1>Rick & Morty Wiki</h1>
      <nav className="navigation flex gap-4">
        <Link href="/character" >
          Character
        </Link>
        <Link href="/episode" >
          Episode
        </Link> 
        <Link href="/location" >
          Location
        </Link>
      </nav>
    </header>
  )
}