import React from "react";
import { fetchEpisode } from "@/app/lib/api";
import EpisodeCard from "@/components/ui/EpisodeCard";

type Episode = {
  id: number;
  name: string;
  episode: string;
  air_date: string;
  characters: string[];
  url: string;
  created: string;
};

export default async function EpisodePage({  params }: {   params: Promise<{ id: string }> }) {
  const { id } = await params;
  
  const episode: Episode = await fetchEpisode(Number(id));

  return (
  <EpisodeCard episode={episode}/>
  );
}
