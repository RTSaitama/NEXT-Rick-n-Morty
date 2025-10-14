import LocationCard from "@/components/ui/LocationCard"
import { fetchLocation } from "@/app/lib/api"

export default async function LocationDetailPage({  params }: {   params: Promise<{ id: string }> }) {
  const { id } = await params;
  const location = await fetchLocation(Number(id))
  
  return (
    <div>
      <LocationCard location={location} />
    </div>
  )
}