import LocationCard from "@/components/ui/LocationCard"
import { fetchLocation } from "@/app/lib/api"

export default async function LocationDetailPage({ params }: { params: { id: string } }) {
  const location = await fetchLocation(Number(params.id))
  
  return (
    <div>
      <LocationCard location={location} />
    </div>
  )
}