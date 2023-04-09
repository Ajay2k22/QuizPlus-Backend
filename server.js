// IMPORTING A MODULES
import express from 'express'
import { connectDb } from './database/connectDb.js';
import bodyParser from 'body-parser';
import router from './api/routes/index.js';
import { ErrorHandler } from './middleware/index.js';
const app = express();
// APPLYING A MIDDLEWARE
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(bodyParser.json());
app.use(router)

const port = process.env.PORT || 3000;

// SERVER CREATION
app.listen(5000, () => {
    console.log('SERVER IS RUNNING http://localhost:5000')
})

// DATABASE CONNECTION
connectDb()

// GLOBAL ERRORHANDLER
app.use(ErrorHandler)