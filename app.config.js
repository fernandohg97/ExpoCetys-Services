module.exports = {
  port: process.env.PORT || 8482,
  db: process.env.MONGODB || 'mongodb://localhost/',
  SECRET_TOKEN: 'miclavedetokens'
}
