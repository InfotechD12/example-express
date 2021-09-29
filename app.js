const express = require('express')
const app = express()
const port = 80

app.get('/', (req, res) => {
    res.send('Server Infotech')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})