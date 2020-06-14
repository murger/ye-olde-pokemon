import request from '../utils/request.js'
import { POKEMON_API_HOST } from '../constants'

export const getAllPokemons = async () => {
  try {
    const data = await request([
      POKEMON_API_HOST,
      'pokemon-species',
      '?limit=1000'
    ])

    return data.results
  } catch (error) {
    throw new Error(error)
  }
}
