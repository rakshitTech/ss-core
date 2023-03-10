import express from 'express'
import {saveVisitor}  from './../models/visitorModel.js'
export const publicRouter = express.Router();

publicRouter.get('/', (req, res) => {
	res.redirect('https://instagram.com/shravya__sharanya?igshid=YmMyMTA2M2Y=')
	let visitorData = {
		host: req.headers.host, 
		ip: req.headers['x-forwarded-for'], 
		user_agent: req.headers['user-agent'], 
		ip_country: req.headers['cf-ipcountry'], 
		cookie: req.headers.cookie, 
		utm_medium: req.query.utm_medium, 
		utm_source: req.query.utm_source, 
		utm_campaign: req.query.utm_campaign, 
		url_path: req.url
	}
	saveVisitor(visitorData).catch(error => console.error('Error in publicRouter.get saveVisitor', JSON.stringify(visitorData), error))
})

