import express from 'express';
import dotenv from 'dotenv';
import color from "colors"
import connectDB from './config/db.js';
import cors from 'cors'

import morgan from  'morgan'
import bodyParser from "body-parser"
import fileRoutes from './routes/file-upload-routes.js'
import userRoutes from './routes/userRouts.js'
import {notFound, errorHandler} from './middlewares/errorMiddleware.js'



dotenv.config();
connectDB();


const app = express();
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send("Api Server is working")
})




app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json())

app.use('/uploads', express.static('uploads'))
const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server is running on port ${PORT}`.yellow))
app.use('/api', fileRoutes);
app.use('/api/users', userRoutes);

app.use(notFound);
app.use(errorHandler);