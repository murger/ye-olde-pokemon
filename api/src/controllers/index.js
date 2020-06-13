import express from 'express'
import { findPokemonByName } from './pokemon'

const Router = express.Router()

Router.post('/pokemon/:name/', findPokemonByName)

export default Router
