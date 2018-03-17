const express = require('express')
const app = express()
const entryFile = './index.html'

app.get('/', (req, res) => res.sendfile(entryFile))
app.use(express.static('./'))

app.listen(3000, () => console.log('Example app listening on port 3000!'))