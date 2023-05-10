const express = require('express');
const app = express();
const cors = require('cors');
const bcrypt = require('bcrypt');
const User = require('./models/User.js');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const { mongoose } = require('mongoose');
const cookieParser = require('cookie-parser');

const secret = bcrypt.genSaltSync(10);
const jwtSeceret = 'secret';

app.use(express.json());
app.use(cookieParser());
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

// login user

app.post('/login', async (req, res) => {
    const {email,password} = req.body;
    const user = await User.findOne({email});
    if (user) {
        const result = bcrypt.compareSync(password, user.password);
        if (result) {
            jwt.sign({email: user.email, id: user._id, username: user.username}, jwtSeceret, (err, token) => {
                if (err) throw err;
                res.cookie('token', token).json(user);
            });
        } else {
            res.status(422).json({ message: 'Wrong password' });
        }
    } else {
        res.json({ message: 'User not found' });
    }
});

// get user
app.get('/user', (req, res) => {
    const {token} = req.cookies;
    if (token) {
        jwt.verify(token, jwtSeceret, async (err, decoded) => {
            if (err) throw err;
            const {email,username,_id} = await User.findById(decoded.id);
            res.json({email,username,_id});
        });
    } else {
        res.json(null);
    }
});

// logout user
app.post('/logout', (req, res) => {
    res.clearCookie('token', '').json(true);
    res.json({ message: 'Logout successful' });
  });

// deny access to /account if not logged in
app.get('/account', (req, res) => {
    const { token } = req.cookies;
    if (token) {
        jwt.verify(token, jwtSeceret, async (err, decoded) => {
            if (err) {
                // If the token is invalid or has expired, return a 401 status code
                res.status(401).json({ message: 'Unauthorized' });
            } else {
                const { email, username, _id } = await User.findById(decoded.id);
                res.json({ email, username, _id });
            }
        });
    } else {
        // If no token is provided, return a 401 status code
        res.status(401).json({ message: 'Unauthorized' });
    }
});


app.listen(5000);