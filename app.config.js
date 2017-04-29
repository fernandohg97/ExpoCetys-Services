module.exports = {
  port: process.env.PORT || 8482,
  db: process.env.MONGODB_URI || 'mongodb://localhost/',
  SECRET_TOKEN: 'miclavedetokens'
}
