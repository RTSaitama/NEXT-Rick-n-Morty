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
    <div className="flex gap-4">
      <div className="w-1/4">
        <Filters />
      </div>
      <div className="flex-1">
        <CharactersPage searchParams={params} />
      </div>
    </div>
  )
}