 /* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { fetchCharacters } from '@/app/lib/api';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
  page: number,
}

export default async function CharactersPage({ page }: Props) {
  const data = await fetchCharacters(page);

  return (
<div className="flex flex-wrap gap-6 justify-center p-4">
  {data.results.map((character: any) => (
    <Link key={character.id} href={`/character/${character.id}`}>
      <div className="rick-morty-card">
        <Image
          src={character.image}
          width={300}
          height={300}
          alt={character.name}
          className="w-full h-48 object-cover rounded-lg mb-2"
        />
        <h3 className="text-lg font-bold">{character.name}</h3>
        <p className={`status-${character.status.toLowerCase()}`}>
          {character.status}
        </p>
        <p>{character.species}</p>
      </div>
    </Link>
  ))}
</div>
  );
}