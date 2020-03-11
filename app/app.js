const express = require('express')

const app = express()
require('dotenv').config()

require('./configs')(app, express)
require('./configs/db')

require('./graphql/createGqlServer')(app)

// Importing Routes & Modules
// require('./Router')(app)

app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Server is up!'
  })
})

//Error Handling & Not Found Middlewares
require('./middlewares')(app)

const PORT = process.env.PORT || 2255
app.listen(PORT, () => console.log(`--- Sever is running on http://localhost:${PORT} ---`))
