const express = require('express');
const apis = require('./controllers/ApiController.js');
const app = express();

app.use(express.json());

app.get('/api/apis', apis.read);
app.get('/api/apis/:id', apis.read);
app.post('/api/apis', apis.create);
app.put('/api/apis/:id', apis.update);
app.delete('/api/apis/:id', apis.delete);

app.listen(5000, () => {
    console.log('Listening on port 5000');
})