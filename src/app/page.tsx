import CharactersPage from "@/components/ui/CharactersPage"

export default async function HomePage({ searchParams }: { searchParams: { page?: string } }) {
  return (
    <div className="px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Rick & Morty Characters</h1>
      <CharactersPage searchParams={searchParams} />
    </div>
  )
}