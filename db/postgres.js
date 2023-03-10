import pg from 'pg';
const {Pool} = pg;

let pool = new Pool({
  user: global.Config.postgres.user,
  host: global.Config.postgres.host,
  database: global.Config.postgres.db,
  password: global.Config.postgres.pass,
  port: global.Config.postgres.port,
  idleTimeoutMillis: 10000,
  connectionTimeoutMillis: 10000, 
  max: 30,
  ssl: { rejectUnauthorized: false }
})

//pool.on('connect', () => {
//  console.log('Postgres successfully connected');
//});

pool.on('error', error => {
  console.error('PG Error', error);
});

export const pgQuery = (query, values) => {
	return pool.query(query, values)
	.then(res => {
		return res && res.rows
	})
	.catch(e => {
        	console.error("pgQuery error::",e.stack);
		return e
	})
}

pgQuery('SELECT 1').then(()=>console.log('Postgres connected successfully')).catch(error => console.error('Unable to connect Postgres', error))

