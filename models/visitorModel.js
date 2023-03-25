export const saveVisitor = (visitorData) => {
        let sql = `INSERT INTO visitors (host, ip, user_agent, ip_country, cookie, utm_medium, utm_source, utm_campaign, url_path) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9)`
        let values = [visitorData.host, visitorData.ip, visitorData.user_agent, visitorData.ip_country, visitorData.cookie, 
		visitorData.utm_medium, visitorData.utm_source, visitorData.utm_campaign, visitorData.url_path] 

        values.forEach((d,i) => values[i] = (d || '').toString())
        return global.Config.pgQuery(sql, values)
		.then(result => {
			return result
		})
		.catch(error => {
			console.error('Error PG insert visitor', error)
			throw new Error(error);
		})
}
