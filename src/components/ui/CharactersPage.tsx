import React from 'react';
import { fetchCharacters } from '@/app/lib/api';
import Image from 'next/image';
import Link from 'next/link';
import Pagination from './Pagination';

type Character = {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: { name: string; url: string };
  location: { name: string; url: string };
  image: string;
  episode: string[];
  url: string;
  created: string;
};

export default async function CharactersPage({
  searchParams,
}: {
  searchParams?: {
    page?: string;
    name?: string;
    status?: string;
    species?: string;
    gender?: string;
  };
}) {
  const page = searchParams?.page ? Number(searchParams.page) : 1;

  const data = await fetchCharacters({
    page,
    name: searchParams?.name,
    status: searchParams?.status,
    species: searchParams?.species,
    gender: searchParams?.gender,
  });

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-4">
        {data.results.map((char: Character) => (
          <Link key={char.id} href={`/character/${char.id}`}>
            <div className="rick-morty-card">
              <Image
                src={char.image}
                alt={char.name}
                width={150}
                height={200}
                className="w-full h-48 object-cover rounded-lg mb-2"
              />
              <h3 className="text-lg font-bold">{char.name}</h3>
              <p className={`status-${char.status.toLowerCase()}`}>{char.status}</p>
              <p>{char.species}</p>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-8 flex justify-center">
        <Pagination currentPage={page} totalPages={data.info.pages} basePath="/character" />
      </div>
    </>
  );
}
