import data from '../..data/pokemon.json'

export const findPokemonByName = async (req, res) => {
  const { name } = req.params
  const item = data.find(pokemon => pokemon.name === name)

  if (!item) {
    return res.status(404).end()
  }

  return res.json(item)
}
