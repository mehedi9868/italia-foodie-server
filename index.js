const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

app.get('/', (req, res) => {
    res.send('Server is running')
});

app.get('/check', (req, res) => {
    res.json({ msg: 'yes everything is ok' });
})

app.listen(port, () => {
    console.log(`server is running on port: ${port}`)
})