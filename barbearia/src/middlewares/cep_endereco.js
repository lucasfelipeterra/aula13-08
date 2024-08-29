const axios = require("axios");

const cep_endereco = (req, res, next) => {
    if (req.body.cep != undefined && req.body.cep.length == 8 && !isNaN(number(req.body.cep))) {
        axios.get(`https://viacep.com.br/ws/${req.body.cep}/json/`).then((resposta) => {
            delete req.body.cep;

            req.body.endereco = resposta.data;

            next();
        });
    } else {
        res.status(400).json;
    }
};
module.exports = cep_endereco;
