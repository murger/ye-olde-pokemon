import express from 'express'
import { findPokemonsByName } from './pokemon'

const Router = express.Router()

Router.post('/pokemon', findPokemonsByName)

export default Router
