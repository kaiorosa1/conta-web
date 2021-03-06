const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const port = 8000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/public', express.static(process.cwd() + '/public'));


app.get('/', (req, res) => {
    res.sendFile(process.cwd() + '/views/home.html');
});

app.listen(port, () => console.log(`Conta Web listening on port ${port}!`));