const express=require("express");
const cors=require("cors");


const urlRoutes = require("./routes/urlRoutes");
const app=express();

app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
);

app.use(express.urlencoded({extended:true}));
app.use(express.json());

//Health Checker
app.get("/health", (req, res) => {
    res.status(200).json({
        status: "OK"
    });
});


app.use("/", urlRoutes);

module.exports = app;