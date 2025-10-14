 import LocationsPage from "@/components/ui/LocationsPage"
 
export default async  function Characters({ 
  searchParams 
}: { 
  searchParams: Promise <{ page?: string }>
 }) {

  const params = await searchParams;
  return <LocationsPage  searchParams={params}/>
}   