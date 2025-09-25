import { fetchEpisodes } from "../lib/api"
import EpisodesPage from "@/components/ui/EpisodesPage";

export default async function Episodes() {
  const episodes = await fetchEpisodes();
  console.log(episodes.results)
  return (<EpisodesPage/>) 
}