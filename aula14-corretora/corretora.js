const db = []
let proxId = 1;

const model = (body,id = proxId++) =>{
    if(body.nome != "" && body.nome != undefined ){
        return{
            id,
            nome: body.nome,
        };
    }
};

const store = (body) =>{
    const novo = model(body);
    if(novo){
        db.push(novo);

        console.log(novo);
        return{status: 201, message: "Corretora criada com sucesso"}
    }

    return 400;
}