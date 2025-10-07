import CharactersPage from "@/components/ui/CharactersPage"

export default function Characters({ searchParams }: { searchParams: { page?: string } }) {
  return <CharactersPage searchParams={searchParams}/>
}