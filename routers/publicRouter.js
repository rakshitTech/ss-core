import express from 'express'
import {pgQuery} from './../db/postgres.js'

export const publicRouter = express.Router();

publicRouter.get('/', (req, res) => {
	console.log(req)
	return res.redirect('https://instagram.com/shravya__sharanya?igshid=YmMyMTA2M2Y=')
})

pgQuery('SELECT * FROM users;')
.then(result => console.log("PG-route",result.length))
.catch(error => console.log("PG-error-route",error))

pgQuery('SELECT * FROM users;')
.then(result => console.log("PG-2route",result.length))
.catch(error => console.log("PG-2error-route",error))
