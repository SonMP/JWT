import express from "express";
import configViewEngine from "./config/viewEngine";
import initWebRoutes from "./routes/web";
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 8386

configViewEngine(app);

initWebRoutes(app);

app.listen(PORT, () => {
    console.log('JWT BackEnd is running on the port = ' + PORT);
})