
import CharactersPage from "@/components/ui/CharactersPage"
import Pagination from "@/components/ui/Pagination"
import { fetchCharacters } from "./lib/api"

export default async function HomePage({ searchParams }: { searchParams: { page?: string } }) {
   const page = Number(searchParams.page) || 1
   const data = await fetchCharacters(page)
  return (
<div className="px-4 py-8">
  <h1 className="text-4xl font-bold mb-8 text-center">Rick & Morty Characters</h1>

  <div className="grid   gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
    <CharactersPage page={page} />
  </div>

  <div className="mt-8 flex justify-center">
    <Pagination
      currentPage={page}
      totalPages={data.info.pages}
      basePath="/"
    />
  </div>
</div>

  )
}