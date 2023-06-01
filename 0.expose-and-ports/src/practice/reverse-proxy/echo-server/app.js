const express = require('express')
const app = express()
const port = process.env.SERVER_PORT;
const serverName = process.env.SERVER_NAME;

app.get('/', (req, res) => {
  res.send(`Welcome to "${serverName}" Server.`)
})

app.listen(port, () => {
  console.log(`"${serverName}" Server listening on port ${port}`)
})