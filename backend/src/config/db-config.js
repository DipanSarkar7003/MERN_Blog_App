require("dotenv").config();
const mongoose = require("mongoose");

const connectDb = () => {
    try{

        mongoose
        .connect(process.env.DB_CONNENCTION_STRING)
        .then(() => {
            console.log("MongoDB Connected");
        })
        .catch((err) => {
            console.log("Error connecting" + err);
        });
    }
    catch(error){
console.log("mongo db did not connect for this " + error)
    }
};

module.exports = connectDb;
