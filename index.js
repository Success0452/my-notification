require('dotenv').config();
const express = require('express');

const app = express();

app.use(express.urlencoded({ extended: false}));
app.use(express.json());

const notify_route = require('./routes/notify');

app.get('/', (req, res) => {

    res.status(200).json({
        msg: "success"
    });
    
})


app.use('/', notify_route);

const port = process.env.PORT || 3000;

const start = () => {
    app.listen(port, () => console.log( `Server is runinng at port ${port}` ))
}

start();