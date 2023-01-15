const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
let path = require('path');

app.get('/', (req, res) => {
    res.send('app')
})
app.listen(port, () => console.log(`listening on port${port}`));