const express = require('express');
const app = express();
const path = require('path');
const routing = require('./routing');
app.use(express.static(path.join(__dirname)));

app.use('/', routing);

app.listen(8080, () => {
    console.log('Server is running on port 8080');
});