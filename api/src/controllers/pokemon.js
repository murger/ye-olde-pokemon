import { fetchPokemons, fetchPokemonDescription } from '../resources/pokemon'
import { translate } from '../resources/translation'

export const searchPokemons = async (req, res) => {
  const { query } = req.body
  const data = await fetchPokemons()
  const set = data.filter(({ name }) => name.startsWith(query.toLowerCase()))

  console.log(`findPokemonsByName: ${query} (${set.length})`)

  if (!set.length) {
    return res.status(404).end()
  }

  return res.json(set)
}

export const getPokemon = async (req, res) => {
  const { name } = req.params
  const description = await fetchPokemonDescription(name)

  if (!description) {
    return res.status(404).end()
  }

  try {
    const translation = await translate(description)
    return res.json({
      name,
      description: translation
    })
  } catch (error) {
    return res.json({ name, description })
  }
}
