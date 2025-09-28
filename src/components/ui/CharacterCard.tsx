import Image from 'next/image'

type Character = {
  id: number
  name: string
  status: string
  species: string
  type: string 
  gender: string
  origin: {
    name: string
    url: string
  }
  location: {
    name: string
    url: string
  }
  image: string
  episode: string[]
  url: string
  created: string
}

type CharacterCardProps = {
  character: Character
}

export default function CharacterCard({ character }: CharacterCardProps) {
   if (!character) {
    return (
      <div className="rick-morty-card">
        <p className="text-red-400">Character data not available</p>
      </div>
    )
  }

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'alive': return 'text-green-400'
      case 'dead': return 'text-red-400'
      default: return 'text-yellow-400'
    }
  }

  return (
    <div className="rick-morty-card relative p-6 max-w-md mx-auto">
      <div className="character-image mb-6 text-center">
        <Image
          src={character.image}
          alt={character.name}
          width={200}
          height={200}
          className="w-48 h-48 rounded-full object-cover border-4 border-green-400 mx-auto portal-image"
        />
      </div>

      <div className="character-info mb-6">
        <h1 className="text-3xl font-bold text-green-400 mb-3 text-center">{character.name}</h1>
        
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-gray-300 font-semibold">Status:</span>
            <span className={`font-bold ${getStatusColor(character.status)}`}>
              {character.status}
            </span>
          </div>
          
          <div className="flex justify-between items-center">
            <span className="text-gray-300 font-semibold">Species:</span>
            <span className="text-purple-300">{character.species}</span>
          </div>
          
          {character.type && (
            <div className="flex justify-between items-center">
              <span className="text-gray-300 font-semibold">Type:</span>
              <span className="text-blue-300">{character.type}</span>
            </div>
          )}
          
          <div className="flex justify-between items-center">
            <span className="text-gray-300 font-semibold">Gender:</span>
            <span className="text-pink-300">{character.gender}</span>
          </div>
        </div>
      </div>

      <div className="location-info mb-6 bg-gradient-to-r from-green-900/20 to-purple-900/20 p-4 rounded-lg">
        <h3 className="text-lg font-bold text-green-400 mb-3">Location Info</h3>
        
        <div className="space-y-2">
          <div>
            <span className="text-gray-300 text-sm">Origin:</span>
            <p className="text-blue-300 font-medium">{character.origin.name}</p>
          </div>
          
          <div>
            <span className="text-gray-300 text-sm">Current Location:</span>
            <p className="text-purple-300 font-medium">{character.location.name}</p>
          </div>
        </div>
      </div>

      <div className="stats bg-gradient-to-r from-purple-900/20 to-blue-900/20 p-4 rounded-lg">
        <h3 className="text-lg font-bold text-purple-400 mb-2">Stats</h3>
        <div className="flex justify-between items-center">
          <span className="text-gray-300">Episodes:</span>
          <span className="text-green-300 font-bold">{character.episode.length}</span>
        </div>
        <div className="flex justify-between items-center mt-1">
          <span className="text-gray-300 text-sm">Character ID:</span>
          <span className="text-blue-300 text-sm">#{character.id}</span>
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
    </div>
  )
}