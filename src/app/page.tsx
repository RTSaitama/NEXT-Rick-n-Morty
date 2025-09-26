
import CharactersPage from "@/components/ui/CharactersPage"
import Pagination from "@/components/ui/Pagination"
import { fetchCharacters } from "./lib/api"

export default async function HomePage({ searchParams }: { searchParams: { page?: string } }) {
   const page = Number(searchParams.page) || 1
   const data = await fetchCharacters(page)
  return (
    <div >
      <h1>Rick & Morty Characters</h1>
      <CharactersPage page={page} />
       <Pagination 
        currentPage={page} 
        totalPages={data.info.pages} 
        basePath="/" 
      />
    </div>
  )
}