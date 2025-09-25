import React from "react";
import { fetchEpisode } from "@/app/lib/api";

type Episode = {
  id: number;
  name: string;
  episode: string;
  air_date: string;
};

export default async function EpisodePage({ params }: { params: { id: string } }) {
  const episode: Episode = await fetchEpisode(Number(params.id));

  return (
    <div className="flex justify-center mt-10">
      <div className="max-w-sm bg-white shadow-md rounded-lg p-4">
        <h2 className="text-2xl font-bold mb-2">{episode.name}</h2>
        <p>
          <span className="font-semibold">Episode:</span> {episode.episode}
        </p>
        <p>
          <span className="font-semibold">Air Date:</span> {episode.air_date}
        </p>
      </div>
    </div>
  );
}
