/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import { fetchLocations } from '@/app/lib/api'
import Link from 'next/link';
import Pagination from './Pagination';

export default async function LocationsPage({ searchParams }: { searchParams: { page?: string } }) {
  const page = searchParams?.page ? Number(searchParams.page) : 1;
  const data = await fetchLocations(page);

  return (
    <>
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {data.results.map((location: any) => (
            <Link key={location.id} href={`/location/${location.id}`}>
              <div className="w-full h-80 p-4 rounded-2xl shadow-md hover:shadow-xl transition-transform hover:-translate-y-2 bg-gradient-to-br from-green-400/10 to-pink-400/10 border-2 border-green-400 flex flex-col justify-center">
                <h3 className="text-lg font-bold mb-2 text-green-400">{location.name}</h3>
                <p className="text-sm text-white/80 mb-1">Type: {location.type}</p>
                <p className="text-sm text-white/80">Dimension: {location.dimension}</p>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-8 flex justify-center">

        </div>
      </div>
      <Pagination
        currentPage={page}
        totalPages={data.info.pages}
        basePath="/"
      />
    </>

  )
}
