/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { fetchCharacters } from '@/app/lib/api';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
  page: number,
};
type Character = {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
};
export default async function CharactersPage({ page }: Props) {
  const data = await fetchCharacters(page);

  return (
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
  {data.results.map((char: Character) => (
    <Link key={char.id} href={`/character/${char.id}`}>
      {/* НЕ ставимо w-full або block на Link */}
      <div className="rick-morty-card w-full h-80 p-4 rounded-2xl shadow-md hover:shadow-xl transition-transform hover:-translate-y-2 bg-gradient-to-br from-green-400/10 to-pink-400/10 border-2 border-green-400">
        <Image
          src={char.image}
          alt={char.name}
          width={300}
          height={300}
          className="w-full h-48 object-cover rounded-lg mb-2"
        />
        <h3 className="text-lg font-bold">{char.name}</h3>
        <p className={`status-${char.status.toLowerCase()}`}>{char.status}</p>
        <p>{char.species}</p>
      </div>
    </Link>
  ))}
</div>




  );
}
