import moment from 'moment'

export const logRequest = (req, res, next) => {
	try {
		console.log(`${moment().format('YYYY-MM-DD HH:mm:ss:sss')}, [INFO], ${req.method}, url_host=${req.headers.host}, url_path=${req.url}, requestor_ip=${req.headers['x-forwarded-for']}`)
	} catch (error) {
		console.error('Error in api middleware log request', error)
	}
	next()
}

export const logApiError = ((err, req, res, next) => {
	console.error(`${moment().format('YYYY-MM-DD HH:mm:ss:sss')}, [ERROR], ${req.method}, url_host=${req.headers.host}, url_path=${req.url}, requestor_ip=${req.headers['x-forwarded-for']}`, err)
})
