import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import controllers from './controllers'

const app = express()
const port = process.env.PORT || 3000

// Basics
app.use(cors({ maxAge: 86400 }))
app.use(bodyParser.json())
app.use(express.urlencoded({ extended: false }))
app.disable('x-powered-by')

// Routes
app.use('/', controllers)

// Listen
app.listen(port, () => {
	console.log('API running on ' + port)
})
