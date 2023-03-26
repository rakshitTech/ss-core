export const ENV = {
	port: 0,
	postgres: {
	    	user: "xxxx",
		host: "xxxx",
		port: "xxxx",
		db: "xxxx",
		pass: "xxxx",
		pg_query: () => {}
	},
        aws: {
                access_key_id: "xxxx",
                secret_access_key: "xxxx",
                region: "xxxx",
                assume_role_arn: "xxxx",
                session: {
                        access_key_id: '',
                        secret_access_key: '',
			region: '',
                        token: '',
                        expiration: ''
                }
        }
}
