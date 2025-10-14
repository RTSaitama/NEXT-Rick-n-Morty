 
export type Location = {
  id: number
  name: string
  type: string
  dimension: string
  residents: string[]
}

export type Character = {
  id: number
  name: string
  image: string
}



export type CharacterDetails = {
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
 