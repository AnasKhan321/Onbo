const express = require('express')
const app = express()
const port = 3000
const ConnectToMongo = require('./db.js')

app.use(express.json());

ConnectToMongo(); 

app.use('/' , require('./routes/routess.js'))



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})