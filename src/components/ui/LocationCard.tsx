import Image from 'next/image'

type Location = {
  id: number
  name: string
  type: string
  dimension: string
  residents: string[]
}

type Character = {
  id: number
  name: string
  image: string
}

type LocationCardProps = {
  location: Location
}

 
async function fetchResidents(residentUrls: string[]): Promise<Character[]> {
  try {
    const urls = residentUrls.slice(0, 4)  
    const residentPromises = urls.map(url => fetch(url).then(res => res.json()))
    const residentsData = await Promise.all(residentPromises)
    return residentsData
  } catch (error) {
    console.error('Error fetching residents:', error)
    return []
  }
}

export default async function LocationCard({ location }: LocationCardProps) {
 
  if (!location || !location.residents) {
    return (
      <div className="rick-morty-card">
        <p className="text-red-400">Location data not available</p>
      </div>
    )
  }

  const residents = await fetchResidents(location.residents)

  return (
    <div className="rick-morty-card relative p-4">
      {/* Превью жителів */}
      <div className="residents-preview mb-4">
        {location.residents.length > 0 ? (
          <div className="flex gap-2 mb-2">
            {residents.map((resident) => (
              <Image
                key={resident.id}
                src={resident.image}
                alt={resident.name}
                width={64}
                height={64}
                className="w-16 h-16 rounded-full object-cover border-2 border-purple-400"
                title={resident.name}
              />
            ))}
            {location.residents.length > 4 && (
              <div className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-sm">
                +{location.residents.length - 4}
              </div>
            )}
          </div>
        ) : (
          <div className="w-16 h-16 rounded-full bg-gray-600 flex items-center justify-center text-white text-xs">
            No residents
          </div>
        )}
      </div>

      {/* Інформація про локацію */}
      <div className="location-info">
        <h3 className="text-xl font-bold text-purple-400 mb-2">{location.name}</h3>
        <p className="text-blue-300 font-semibold mb-1">{location.type}</p>
        <p className="text-gray-300 text-sm mb-2">{location.dimension}</p>
        <p className="text-green-300 text-sm">
          {location.residents.length} resident{location.residents.length !== 1 ? 's' : ''}
        </p>
      </div>

      {/* Ховер ефект */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-end p-4">
        <button className="portal-button text-sm py-2 px-4">
          View Details
        </button>
      </div>
    </div>
  )
}