import moment from 'moment'

export const logRequest = (req, res, next) => {
	try {
		console.log(`${moment().format('YYYYMMDD HH:mm:ss:sss')}, ${req.headers.host}, ${req.headers['x-forwarded-for']}, ${req.method}, ${req.url}`)
	} catch (error) {
		console.error('Error in api middleware log request', error)
	}
	next()
}
