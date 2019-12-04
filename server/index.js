const express = require('express');
const app = express();

app.use(express.json());

// app.get('/', (req, res) => {
//     res.render('../public/public/index.html')
// })

app.get('/hey', (req, res) => res.send('ho'))

app.listen(4000, () => {
    console.log('Listening on port 4000');
})