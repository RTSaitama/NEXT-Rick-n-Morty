import React from 'react';
import { fetchCharacter } from '@/app/lib/api';
import Image from 'next/image';
type Character = {
  id: number
  name: string
  status: string
  species: string
  gender: string
  origin: { name: string }
  location: { name: string }
  image: string
}

export default async function CharacterPage({ params }: { params: { id: string } }) {
  const character: Character = await fetchCharacter(Number(params.id));

  return (
    <div className="flex justify-center mt-10 items-center">
      <div className="max-w-sm bg-white shadow-md rounded-lg overflow-hidden">
        <Image
          width={300}
          height={300}
          src={character.image}
          alt={character.name}
          className="w-full h-64 object-cover"
        />
        <div className="p-4">
          <h2 className="text-2xl font-bold mb-2">{character.name}</h2>
          <p>
            <span className="font-semibold">Статус:</span> {character.status}
          </p>
          <p>
            <span className="font-semibold">Вид:</span> {character.species}
          </p>
          <p>
            <span className="font-semibold">Стать:</span> {character.gender}
          </p>
          <p>
            <span className="font-semibold">Походження:</span> {character.origin.name}
          </p>
          <p>
            <span className="font-semibold">Локація:</span> {character.location.name}
          </p>
        </div>
      </div>
    </div>
  );
}
