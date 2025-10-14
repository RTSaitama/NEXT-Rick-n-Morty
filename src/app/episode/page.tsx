import { fetchEpisodes } from "../lib/api"
import EpisodesPage from "@/components/ui/EpisodesPage";

export default async function Episodes({
  searchParams
}: {
  searchParams: Promise< {page?: string}>
}) {
  const params = await searchParams
  const episodes = await fetchEpisodes();
  console.log(episodes.results)
  return (<EpisodesPage searchParams={params}/>) 
}