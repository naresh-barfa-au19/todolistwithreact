require("dotenv").config()
const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODBURL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{console.log(`mongodb atlas is connected with db `)})
.catch((err)=>{console.log(err)})
const dbConnection = mongoose.connection;
dbConnection.on("error", (err) => console.log(`Connection error ${err}`));
dbConnection.once("open", () => console.log("Connected to DB successfully !"));
