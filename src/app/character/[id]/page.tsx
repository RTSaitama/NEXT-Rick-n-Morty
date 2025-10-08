import { fetchCharacter } from '@/app/lib/api';
import CharacterCard from '@/components/ui/CharacterCard';
type Character = {
  id: number
  name: string
  status: string
  species: string
  type: string 
  gender: string
  origin: {
    name: string
    url: string
  }
  location: {
    name: string
    url: string
  }
  image: string
  episode: string[]
  url: string
  created: string
}

export default async function CharacterPage({ params }: { params: { id: string } }) {
  const character: Character = await fetchCharacter(Number(params.id));

  return (
    <CharacterCard character={character}/>
  );
}
