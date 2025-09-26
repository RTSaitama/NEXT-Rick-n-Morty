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
    <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 p-4">
      {data.results.map((character: any) => (
        <Link
          key={character.id}
          href={`/character/${character.id}`}
          className="block"
        >
          <div className="rick-morty-card p-4 rounded-2xl shadow-md hover:shadow-xl transition-transform hover:-translate-y-2 bg-gradient-to-br from-green-400/10 to-pink-400/10 border-2 border-green-400">
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