import {ENV} from './environment.js'

global.Config = {
	port: ENV.port,
	postgres: {
		user: ENV.postgres.user,
		host: ENV.postgres.host,
		port: ENV.postgres.port,
		db: ENV.postgres.db,
		pass: ENV.postgres.pass,
		pg_query: () => {}
	},
	aws: {
		access_key_id: ENV.aws.access_key_id,
                secret_access_key: ENV.aws.secret_access_key,
                region: ENV.aws.region,
                assume_role_arn: ENV.aws.assume_role_arn,
                session: {
			access_key_id: '',
			secret_access_key: '',
			region: '',
			token: '',
			expiration: ''
                }
        }
}
