import './config/config.js'
import http from 'http'
import express from 'express'
import path from 'path'
import {logRequest, logApiError} from './utils/api_middleware.js'
import {pgQuery} from './utils/db/postgres.js'
import {publicRouter} from './routers/publicRouter.js'

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(logRequest)
app.use('/', publicRouter)

//const __dirname = path.resolve();

app.use(logApiError)
app.use((err, req, res, next) => {
	res.status(500).send({ message: err.message })
})

const port = global.Config.port
const httpServer = http.Server(app)

httpServer.listen(port, () => {
	console.log(`https://shravyasharanya.com Running on port:${port}`)
	global.Config.pgQuery = pgQuery
})

