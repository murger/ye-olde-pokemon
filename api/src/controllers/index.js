import express from 'express'
import { searchPokemons, getPokemon } from './pokemon'

const Router = express.Router()

Router
  .post('/pokemon', searchPokemons)
  .get('/pokemon/:name', getPokemon)

export default Router
