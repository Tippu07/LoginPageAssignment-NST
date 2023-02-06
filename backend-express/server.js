const express = require('express');

const app = express();
const cors = require('cors')

app.use(cors());

app.use('/login', (req, res) => {
    res.send({
        token: 'test123'
    });
});

app.get('/', (req, res) => {
    res.send('Successful response.');
});

app.listen(8080, () => console.log('Example app is listening on port 8080.'));
