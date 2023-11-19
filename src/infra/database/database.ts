import pgPromise from "pg-promise"

const pgp = pgPromise({})

const db = pgp({
  user: "postgres",
  password: "docker",
  host: "localhost",
  port: 5432,
  database: "postgres",
  idleTimeoutMillis: 100
})

export default db