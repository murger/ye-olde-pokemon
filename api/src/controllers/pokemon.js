import { getAllPokemons } from '../resources/pokemon'

export const findPokemonsByName = async (req, res) => {
  const { query } = req.body
  const data = await getAllPokemons()
  const set = data.filter(({ name }) => name.startsWith(query.toLowerCase()))

  console.log(`findPokemonsByName: ${query} (${set.length})`)

  if (!set.length) {
    return res.status(404).end()
  }

  return res.json(set)
}
