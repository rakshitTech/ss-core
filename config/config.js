import {ENV} from './environment.js'

global.Config = {
  port: ENV.port,
  postgres: {
    user: ENV.postgres.user,
    host: ENV.postgres.host,
    port: ENV.postgres.port,
    db: ENV.postgres.db,
    pass: ENV.postgres.pass
  }
}
