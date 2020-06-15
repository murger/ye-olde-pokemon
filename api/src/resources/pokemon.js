import request from '../utils/request.js'
import { POKEMON_API_HOST } from '../constants'

export const fetchPokemons = async () => {
  const data = await request([
    POKEMON_API_HOST,
    'pokemon-species',
    '?limit=1000'
  ])

  return data.results
}

export const fetchPokemonDescription = async (name) => {
  const data = await request([
    POKEMON_API_HOST,
    'pokemon-species',
    name
  ])

  const entry = data.flavor_text_entries.find(item =>
    item.language.name === 'en'
  )

  return entry ? entry.flavor_text : null
}
