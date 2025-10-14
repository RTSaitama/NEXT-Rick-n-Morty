import { fetchCharacter } from '@/app/lib/api';
import CharacterCard from '@/components/ui/CharacterCard';
import type { CharacterDetails } from '@/typedefs/typedefs';

export default async function CharacterPage({ params }: { params: { id: string } }) {
  const character: CharacterDetails = await fetchCharacter(Number(params.id));

  return (
    <CharacterCard character={character}/>
  );
}
