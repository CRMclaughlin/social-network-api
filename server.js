require('./config/connection');
const express = require('express');
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 3300;

app.use(express.join());
app.use(routes)

app.listen(PORT, () => {
    console.log(`App listening at http://localhost:${PORT}`)
})