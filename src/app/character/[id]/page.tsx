import { fetchCharacter } from '@/app/lib/api';
import CharacterCard from '@/components/ui/CharacterCard';
import type { CharacterDetails } from '@/typedefs/typedefs';

export default async function CharacterPage({  params }: {   params: Promise<{ id: string }> }) {
  const { id } = await params;
  const character: CharacterDetails = await fetchCharacter(Number(id));

  return (
    <CharacterCard character={character}/>
  );
}