const express = require('express')
const serverless = require('serverless-http')
const path = require('path')
const { Router } = require('express')
const app = express()
// const port = 3000
const router = express.Router()

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname,'response.json'))
})

// app.listen(port, () => {
//   console.log(`Example app listening on port on ${port}`)
// })
app.use('/.netlify/functions/api',router)
module.exports.handlers(app)