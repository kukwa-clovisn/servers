const express = require('express');
const http = require('http');
const path = require('path')
const userEndpoint = require('./middlewares/user_sign_up');
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const cors = require('cors')
const logger = require('morgan')


const port = process.env.PORT

const app = express()

require("dotenv").config();
app.use(bodyParser.json());
app.use(logger("dev"));
app.use(express.json());
app.use(
     express.urlencoded({
          extended: false,
     })
);
app.use(cookieParser());

app.use('/user', userEndpoint);

app.use(express.static(path.join(__dirname, "public")))

require('dotenv').config()

app.use(
     cors({
          origin: "*",
     })
);




app.get('/', (req, res) => {
     res.json({
          response: "this is codingherald sever side rendering"
     })
})

module.exports = app;