const express = require("express");
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();
const mongoConnect = require("./db/connect")
mongoConnect()
const route = require("./routes/authenticationRoutes")

app.use(cors());
app.use(express.json({limit: "1024mb"}));
app.use(express.urlencoded({extended: true}));
app.use(route)

const PORT = process.env.PORT || 4000;
app.listen(PORT, ()=>{
    console.log(`server is running at http://localhost:${PORT}`)
})

