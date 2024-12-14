const express = require('express');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    switch(req.path) {
        case '/':
            res.send('Hello World!');
            break;
        case '/info':
            res.send('Info Message');
            break;
        default:
            res.status(404).send('Not Found');
    }
});

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});

