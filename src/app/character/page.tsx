// app/character/page.tsx
import CharactersPage from "@/components/ui/CharactersPage"
import Filters from "@/components/ui/Filters"

export default async function CharacterRoute({
  searchParams
}: {
  searchParams: Promise<{
    page?: string
    name?: string
    status?: string
    species?: string
    gender?: string
  }>
}) {
  const params = await searchParams
  console.log('Characters page searchParams:', params)

  return (
    <div className="flex w-full  md:flex-row gap-4">
      <div className="w-full max-w-[30%] md:w-auto md:min-w-[300px] md:max-w-[350px]">
        <Filters />
      </div>
      <div className="flex-1 w-full">
        <CharactersPage searchParams={params} />
      </div>
    </div>



  )
}