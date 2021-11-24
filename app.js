// requires
const express = require('express');
const mongoose = require('mongoose');

// setup
const app = express();
mongoose.connect('mongodb+srv://elhussali:xdrzseawq@nodetest.rcbto.mongodb.net/nodeTest?retryWrites=true&w=majority')
    .then(result => app.listen(3000, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }))
    .catch(err => console.log(err));

//app.set('view engine', 'ejs');
//app.use(express.static('folderName'));
//app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// requests
app.get('/', (req, res) => {
    //res.redirect('/api');
    res.send('Home');
});

app.get('/about', (req, res) => {
    //res.redirect('/api');
    res.send('About');
});

app.get('/contact', (req, res) => {
    //res.redirect('/api');
    res.send('Contact');
});

// api requests
app.use('/api', require('./routes/apiRoutes'));

// 404
app.use((req, res) => {
    res.status(404).send({ errorFound: true, errorExplanation: 'No routes matched' });
});