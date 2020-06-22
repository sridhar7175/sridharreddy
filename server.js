const express = require('express');
const mongoose = require('mongoose');
const app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const authRoutes = require('./routes/auth');
app.use('/api', authRoutes);


//DB Connection
mongoose
    .connect(process.env.DATABASE, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    })
    .then(() => {
        console.log("DB CONNECTED");
    });

app.get('/', (req, res) => {
    res.send('Hello World');
})
app.listen(6000, () => {
    console.log('server is started')
})
