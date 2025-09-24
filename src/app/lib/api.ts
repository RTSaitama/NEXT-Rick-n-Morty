const API_BASE = 'https://rickandmortyapi.com/api'

 export async function fetchCharacters(page = 1) {
  try {
    const response = await fetch(`${API_BASE}/character?page=${page}`)
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

 export async function fetchEpisodes(page = 1) {
  try {
    const response = await fetch(`${API_BASE}/episode?page=${page}`)
    if (!response.ok) {
      throw new Error('Failed to fetch episodes')
    }
    return await response.json()
  } catch (error) {
    console.error('Error fetching episodes:', error)
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

 export async function fetchLocations(page = 1) {
  try {
    const response = await fetch(`${API_BASE}/location?page=${page}`)
    if (!response.ok) {
      throw new Error('Failed to fetch locations')
    }
    return await response.json()
  } catch (error) {
    console.error('Error fetching locations:', error)
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