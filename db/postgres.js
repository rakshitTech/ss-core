import pg from 'pg';
const {Pool} = pg;

let pool = new Pool({
  user: global.Config.postgres.user,
  host: global.Config.postgres.host,
  database: global.Config.postgres.db,
  password: global.Config.postgres.pass,
  port: global.Config.postgres.port,
  idleTimeoutMillis: 0,
  connectionTimeoutMillis: 0, 
  max: 30,
  ssl: { rejectUnauthorized: false }
})

/*
const pgClient = null;
pool.connect()
.then(client => {
	pgClient = client;
})
*/

pool.on('connect', () => {
  console.log('Postgres successfully connected');
});

pool.on('error', () => {
  console.error('PG Error');
});

export const pgQuery = (query, values) => {
	return pool.query(query, values)
	.then(res => {
        	//pgClient.release();
	        //console.log(res.rows[0]);
		return res && res.rows
	})
	.catch(e => {
	        //pgClient.release();
        	console.error("pgQuery error::",e.stack);
		return e
	})
}
