import Image from 'next/image'

type Episode = {
  id: number
  name: string
  air_date: string
  episode: string
  characters: string[]
  url: string
  created: string
}

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

type EpisodeCardProps = {
  episode: Episode
}
 
async function fetchEpisodeCharacters(characterUrls: string[]): Promise<Character[]> {
  try {
    const urls = characterUrls.slice(0, 8) 
    const characterPromises = urls.map(url => fetch(url).then(res => res.json()))
    const charactersData = await Promise.all(characterPromises)
    return charactersData
  } catch (error) {
    console.error('Error fetching characters:', error)
    return []
  }
}

export default async function EpisodeCard({ episode }: EpisodeCardProps) {
   if (!episode || !episode.characters) {
    return (
      <div className="rick-morty-card">
        <p className="text-red-400">Episode data not available</p>
      </div>
    )
  }

  const characters = await fetchEpisodeCharacters(episode.characters)

   const seasonMatch = episode.episode.match(/S(\d+)E(\d+)/)
  const season = seasonMatch ? seasonMatch[1] : '?'
  const episodeNum = seasonMatch ? seasonMatch[2] : '?'

  return (
    <div className="rick-morty-card relative p-6 max-w-4xl mx-auto">
       <div className="episode-header mb-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h1 className="text-3xl font-bold text-green-400 mb-2">{episode.name}</h1>
            <div className="flex gap-4 text-sm">
              <span className="text-purple-300 font-semibold text-lg">{episode.episode}</span>
              <span className="text-gray-300">{episode.air_date}</span>
            </div>
          </div>
          
          <div className="text-right">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-full font-bold">
              Season {season}
            </div>
            <p className="text-blue-300 mt-1 text-sm">Episode {episodeNum}</p>
          </div>
        </div>
      </div>

       <div className="characters-section mb-6">
        <h2 className="text-2xl font-bold text-green-400 mb-4">
          Featured Characters ({episode.characters.length})
        </h2>
        
        {characters.length > 0 ? (
          <>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 mb-4">
              {characters.map((character) => (
                <div key={character.id} className="text-center group">
                  <Image
                    src={character.image}
                    alt={character.name}
                    width={80}
                    height={80}
                    className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover border-2 border-green-400 mx-auto mb-2 portal-image group-hover:border-pink-400 transition-colors"
                  />
                  <p className="text-white text-xs font-medium truncate">{character.name}</p>
                  <p className={`text-xs ${character.status === 'Alive' ? 'text-green-300' : character.status === 'Dead' ? 'text-red-300' : 'text-yellow-300'}`}>
                    {character.status}
                  </p>
                </div>
              ))}
            </div>
            
            {episode.characters.length > 8 && (
              <div className="text-center">
                <div className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full font-semibold">
                  <span>+{episode.characters.length - 8} more characters</span>
                </div>
              </div>
            )}
          </>
        ) : (
          <p className="text-gray-400 text-center py-8">No character data available</p>
        )}
      </div>

       <div className="episode-stats grid md:grid-cols-3 gap-4">
        <div className="bg-gradient-to-r from-green-900/30 to-blue-900/30 p-4 rounded-lg text-center">
          <h3 className="text-green-400 font-bold mb-2">Characters</h3>
          <p className="text-2xl font-bold text-white">{episode.characters.length}</p>
        </div>
        
        <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 p-4 rounded-lg text-center">
          <h3 className="text-purple-400 font-bold mb-2">Season</h3>
          <p className="text-2xl font-bold text-white">{season}</p>
        </div>
        
        <div className="bg-gradient-to-r from-blue-900/30 to-cyan-900/30 p-4 rounded-lg text-center">
          <h3 className="text-blue-400 font-bold mb-2">Episode ID</h3>
          <p className="text-2xl font-bold text-white">#{episode.id}</p>
        </div>
      </div>

       <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
    </div>
  )
}