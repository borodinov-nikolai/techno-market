require('dotenv').config();
const cookieParser = require('cookie-parser');
const sequelize = require('./db');
const express = require('express');
const fileUpload = require('express-fileupload');
const cors = require('cors');
const path = require('path');
const router = require('./routes/index');
const errorMiddleware = require('./middlewares/error-middleware')


const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(cookieParser());
app.use(cors(
    {
        credentials: true,
        origin: process.env.CLIENT_URL
    }
))
app.use(express.static(path.resolve(__dirname, 'static')))
app.use(fileUpload({}));
app.use('/api', router);
app.use(errorMiddleware);


const start = async ()=> {
    try{
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, ()=> console.log(`server started at ${PORT}`))
    } catch(e) {
        console.log(e)
    }

}

start()


