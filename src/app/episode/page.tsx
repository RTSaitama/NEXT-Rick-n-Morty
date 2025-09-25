/* eslint-disable @typescript-eslint/no-explicit-any */
import Link from "next/link";
import { fetchEpisodes } from "../lib/api"

export default async function EpisodesPage() {
  const episodes = await fetchEpisodes();

  return (
    <>
   <h1 className="text-center items-center  ">Episode</h1> 
         <div className="grid gap-6" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))" }}>
            {episodes.results.map((episode: any) => (
              <Link
          key={episode.id}
          href={`/episode/${episode.id}`}
           className="rick-morty-card-link"
        >
          <h3 className="text-lg font-bold mb-2">{episode.name}</h3>
          <p className="text-sm">Episode: {episode.episode}</p>
          <p className="text-sm">Air Date: {episode.air_date}</p>
        </Link>
            ))}
      </div>  
    </>
   )
}