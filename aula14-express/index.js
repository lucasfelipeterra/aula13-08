const express = require("express");
const app = express();
const porta = 3000;
const op = require('./modulos.js');

app.use(express.json())

app.get('/calculadora/somar',(req,res) =>{
    const result = op.soma(req.body)

    res.send(`A soma é: ${result}`)
})

app.get('/calculadora/subtrair',(req,res) =>{
    const result = op.subtrair(req.body)

    res.send(`A subtraçao é: ${result}`)
})

app.get('/calculadora/dividir',(req,res) =>{
    const result = op.dividir(req.body)

    res.send(`A divisao é: ${result}`)
})

app.get('/calculadora/multiplicar',(req,res) =>{
    const result = op.multiplicar(req.body)

    res.send(`A multiplicaçao é: ${result}`)
})



app.listen(porta, () => {
    console.log(`Servidor rodando na porta ${porta}`);
});