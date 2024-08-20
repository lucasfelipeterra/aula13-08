const express = require("express");
const app = express();
const porta = 3000;
const op = require('./modulos.js');

app.use(express.json())

app.get("/corretora", (req, res)=>{
    res.json(corretora.showAII())
})

app.post("/corretora", (req, res)=>{
    const result = corretora.store(req.body);
    res.status(result.status).json({message: result.message});
})

app.get("/corretora/:id", (req, res) =>{
    res.json(corretora.findId(req.params.id))
})
