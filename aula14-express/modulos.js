function soma(body){
    return(parseFloat(body.n1) + parseFloat(body.n2))
}

function subtrair(body){
    return(parseFloat(body.n1) - parseFloat(body.n2))
}

function dividir(body){
    if (body.n2 === 0){
        return "erro: divisão por zero"
    }else{
    return(parseFloat(body.n1) / parseFloat(body.n2))}
}

function multiplicar(body){
    return(parseFloat(body.n1) * parseFloat(body.n2))
}


module.exports = {
    soma,
    multiplicar,
    dividir,
    subtrair,
}