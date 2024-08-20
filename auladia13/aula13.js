const express = require("express");
const app = express();
const porta = 3000;

// metodo get precisa de dois parametros o REQ para a requisiçao , e o RES para resposta para envio do usuario.

app.get("/", (req, res)=>{
    res.send("jogo do tigrinho venha ganhar dinheiro ");
})

app.get("/segunda-rota", (req, res)=>{
    res.send(`segunda rota .`);
})

app.get("/amazon/:produto", (req, res)=>{
    req.params;
    res.send(`O produto comprado foi: ${req.params.produto}`);
})





















































app.listen(porta , () =>{
    console.log(`O servidor iniciou na porta ${porta}`)
})
