
const mongoose = require("mongoose");
require("dotenv").config();

const dbConnect = async () => {
  
   await mongoose
    .connect(process.env.db)
    .then(() => {
        
      console.log("connected to monogdb atlas.");
      
        
    })
    .catch((err) => {
        
      console.error(err);
    });
};

module.exports = dbConnect();