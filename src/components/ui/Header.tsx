import Link from "next/link";

export const Header = () => {
  return (
<header className=" ">
      <h1>Rick & Morty Wiki</h1>
      <nav className="navigation flex flex-row gap-4">
        <Link href="/character" >
          <p   className="rick-morty-card-link">Character</p>

        </Link>
        <Link href="/episode" >
          <p   className="rick-morty-card-link">Episode</p>

        </Link> 
        <Link href="/location" >
          <p   className="rick-morty-card-link">Location</p>
        </Link>
      </nav>
    </header>
  )
}