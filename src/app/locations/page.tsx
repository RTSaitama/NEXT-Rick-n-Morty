 import LocationsPage from "@/components/ui/LocationsPage"
 
export default function Characters({ searchParams }: { searchParams: { page?: string } }) {
  return <LocationsPage  searchParams={searchParams}/>
}