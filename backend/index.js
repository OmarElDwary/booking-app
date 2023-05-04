const express = require('express');
const app = express();
const cors = require('cors');
const bcrypt = require('bcrypt');
const User = require('./models/User.js');
require('dotenv').config();
const { mongoose } = require('mongoose');


const secret = bcrypt.genSaltSync(10);

app.use(express.json());
app.use(cors({
    credentials: true,
    origin: 'http://localhost:5173'
}));

// mongodb connection
mongoose.connect(process.env.MONGO_URL);
app.get('/test', (req, res) => {
    res.json('Hello World!');
});

// register user

app.post('/register', async (req, res) => {
    const { username, password, email, country, address } = req.body;
    const user = await User.create({
        username,
        password: bcrypt.hashSync(password, secret),
        email,
        country,
        address
    });
    res.json(user);
});


app.listen(3000);