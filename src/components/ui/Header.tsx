import Link from "next/link";

export const Header = () => {
  return (
<header className=" ">
      <h1>Rick & Morty Wiki</h1>
      <nav className="navigation flex flex-row gap-4">
        <Link href="/characters" >
          <p   className="rick-morty-card-link">Characters</p>

        </Link>
        <Link href="/episodes" >
          <p   className="rick-morty-card-link">Episodes</p>

        </Link> 
        <Link href="/locations" >
          <p   className="rick-morty-card-link">Locations</p>
        </Link>
      </nav>
    </header>
  )
}