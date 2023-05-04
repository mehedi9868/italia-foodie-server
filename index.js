const express = require('express');
const cors = require('cors');
const allData = require('./data/allData.json');
const testimonials = require('./data/testimonials.json')

const app = express();
const port = process.env.PORT || 5000;
app.use(cors());

app.get('/', (req, res) => {
    res.send(allData);
});

app.get('/:id', (req, res) => {
    const id = req.params.id;
    const data = allData.find(item => item.id === parseInt(id));
    if (data) {
        res.send(data);
    } else {
        res.status(404).send('No Data Found');
    }
});
app.get('/testimonials', (req, res) => {
    res.send(testimonials);
});

app.listen(port, () => {
    console.log(`server is running on port: ${port}`);
});