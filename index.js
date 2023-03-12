const express = require('express')
const path = require('path')
const app = express()
const port = 3000

app.use(express.static(path.join(__dirname,"static")))

app.get('/', (req, res) => {
//   res.send('Hello World!')
  res.sendFile(path.join(__dirname,'package.json'))
})

app.listen(port, () => {
  console.log(`Example app listening on port on ${port}`)
})