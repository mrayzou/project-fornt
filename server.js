//require express
const express = require('express');


//create instance
const app = express();

//require dotenv
require("dotenv").config()

app.use(express.json())

const connectDB = require("./config/connectDB")
connectDB()

app.use("/api/user",require("./routes/user"))
app.use("/api/product",require("./routes/product") )


const PORT = process.env.PORT

//create server
app.listen(PORT, (error) => {
    if (error) {
        console.error(`Error starting server: ${error}`);
    } else {
        console.log(`Server is running on port ${PORT}`);
    }
});

module.exports= connectDB


