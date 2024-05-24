const express = require("express");
const app = express();
const user = require("./routes/user");

const cors = require("cors");

const dbConnect = require("./dbconnect/dbConnect")
require("dotenv").config();

const port = process.env.port;

app.get("/", (req, res) => {
    res.send("hello world");
});

app.use(cors());
app.use(express.json());

app.use("/api/v1/user",user);

dbConnect;



app.listen(port, () => {
    console.log(`listening on port: ${port}`);
});