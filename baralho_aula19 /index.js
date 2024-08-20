const express = require("express");
const app = express();
const porta = 3000;
// const op = require('./modulos.js');

// app.use(express.json())

app.get("/naipe", (req,res) => {
    res.send("get naipe")
})


app.listen(porta, () => {
    console.log("servidor iniciado com suceso")
})