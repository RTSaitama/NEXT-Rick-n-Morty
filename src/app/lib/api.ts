const API_BASE = 'https://rickandmortyapi.com/api'

type FetchCharactersParams = {
  page?: number
  name?: string
  status?: string
  species?: string
  gender?: string
}
type FetchLocationsParams = {
  page?: number
  name?: string
  type?: string
  dimension?: string
}
type FetchEpisodesParams = {
  page?: number
  name?: string
  episode?: string
}
export async function fetchCharacters(params: FetchCharactersParams = {}) {
  try {
    const { page = 1, name, status, species, gender } = params
    
    const queryParams = new URLSearchParams()
    queryParams.set('page', String(page))
    if (name) {
      queryParams.set('name', name)
    };
    if (status) {
      queryParams.set('status', status)
    };
    if (species) {
      queryParams.set('species', species)
    };
    if (gender) {
      queryParams.set('gender', gender)
    };
    
    const response = await fetch(`${API_BASE}/character?${queryParams.toString()}`)
    
    if (!response.ok) {
      throw new Error('Failed to fetch characters')
    }
    return await response.json()
  } catch (error) {
    console.error('Error fetching characters:', error)
    throw error
  }
}

 export async function fetchCharacter(id: number) {
  try {
    const response = await fetch(`${API_BASE}/character/${id}`)
    if (!response.ok) {
      throw new Error('Failed to fetch character')
    }
    return await response.json()
  } catch (error) {
    console.error('Error fetching character:', error)
    throw error
  }
}

export async function fetchLocations(params: FetchLocationsParams = {}) {
  try {
    const { page = 1, name, type, dimension } = params
    
    const queryParams = new URLSearchParams()
    queryParams.set('page', String(page))
    if (name) queryParams.set('name', name)
    if (type) queryParams.set('type', type)
    if (dimension) queryParams.set('dimension', dimension)
    
    const response = await fetch(`${API_BASE}/location?${queryParams.toString()}`)
    if (!response.ok) throw new Error('Failed to fetch locations')
    return await response.json()
  } catch (error) {
    console.error('Error fetching locations:', error)
    throw error
  }
}

 export async function fetchEpisode(id: number) {
  try {
    const response = await fetch(`${API_BASE}/episode/${id}`)
    if (!response.ok) {
      throw new Error('Failed to fetch episode')
    }
    return await response.json()
  } catch (error) {
    console.error('Error fetching episode:', error)
    throw error
  }
}

 export async function fetchEpisodes(params: FetchEpisodesParams = {}) {
  try {
    const { page = 1, name, episode } = params
    
    const queryParams = new URLSearchParams()
    queryParams.set('page', String(page))
    if (name) queryParams.set('name', name)
    if (episode) queryParams.set('episode', episode)
    
    const response = await fetch(`${API_BASE}/episode?${queryParams.toString()}`)
    if (!response.ok) throw new Error('Failed to fetch episodes')
    return await response.json()
  } catch (error) {
    console.error('Error fetching episodes:', error)
    throw error
  }
}


 export async function fetchLocation(id: number) {
  try {
    const response = await fetch(`${API_BASE}/location/${id}`)
    if (!response.ok) {
      throw new Error('Failed to fetch location')
    }
    return await response.json()
  } catch (error) {
    console.error('Error fetching location:', error)
    throw error
  }
}