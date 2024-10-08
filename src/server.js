import express from "express";
import configViewEngine from "./config/viewEngine";
import initWebRoutes from "./routes/web";
import bodyParser from 'body-parser';
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 8386

configViewEngine(app);

//config body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

initWebRoutes(app);

app.listen(PORT, () => {
    console.log('>>> JWT BackEnd is running on the port = ' + PORT);
})