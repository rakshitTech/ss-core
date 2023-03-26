import './config/config.js'
import http from 'http'
import express from 'express'
import path from 'path'

import {stsAssumeRole} from './utils/aws/sts.js'
stsAssumeRole()
import {logRequest, logApiError} from './utils/middlewares/api-console-log.js'
import {pgQuery} from './utils/db/postgres.js'
import {publicRouter} from './routers/public-router.js'
import {s3Download} from './utils/aws/s3.js'

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
	global.Config.pg_query = pgQuery

	setTimeout(() => {
		s3Download('ss-media-bucket', 'logo.png', '')
	}, 1000)
})

