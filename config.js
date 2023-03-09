const ENV = require('environment.js')

module.exports = {
  postgres: {
    user: ENV.postgres.user,
    host: ENV.postgres.host,
    port: ENV.postgres.port,
    db: ENV.postgres.db,
    pass: ENV.postgres.pass
  }
}
