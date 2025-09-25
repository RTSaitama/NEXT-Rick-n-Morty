 /* eslint-disable @typescript-eslint/no-explicit-any */
import { fetchEpisodes } from '@/app/lib/api'
import Link from 'next/link';

export default async function EpisodesPage() {
  const data = await fetchEpisodes();

  return (
<div className="grid gap-6 grid-cols-[repeat(auto-fit,minmax(250px,1fr))]">      <h1 className="text-3xl font-bold text-center mb-8 text-green-400">Episodes</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data.results.map((episode: any) => (
          <Link
            key={episode.id}
            href={`/episode/${episode.id}`}
className=" bg-gradient-to-br from-green-400/10 to-pink-400/10 border-2 border-green-400 rounded-2xl p-4 shadow-md hover:shadow-xl transition-transform hover:-translate-y-2"
          >
            <h3 className="text-lg font-bold mb-2 text-green-400">{episode.name}</h3>
            <p className="text-sm text-white/80 mb-1">Episode: {episode.episode}</p>
            <p className="text-sm text-white/80">Air Date: {episode.air_date}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}
