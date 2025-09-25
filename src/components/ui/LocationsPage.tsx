/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import { fetchLocations } from '@/app/lib/api'
import Link from 'next/link';

export default async function LocationsPage() {
  const data = await fetchLocations();

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center mb-8 text-green-400">Locations</h1>
<div className="grid gap-6 grid-cols-[repeat(auto-fit,minmax(250px,1fr))]">        {data.results.map((location: any) => (
          <Link
            key={location.id}
            href={`/location/${location.id}`}
className=" bg-gradient-to-br from-green-400/10 to-pink-400/10 border-2 border-green-400 rounded-2xl p-4 shadow-md hover:shadow-xl transition-transform hover:-translate-y-2"
          >
            <h3 className="text-lg font-bold mb-2 text-green-400">{location.name}</h3>
            <p className="text-sm text-white/80 mb-1">Type: {location.type}</p>
            <p className="text-sm text-white/80">Dimension: {location.dimension}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}
