const express = require("express");
const router = require("./router/router");
const sequelize = require("./config/config");

const Product = require("./models/Product")

const app = express()
const porta = 8080
//modelo da API JSON
app.use(express.json());
app.use('/api/user', router)
//REQ -> Requisição
//RES -> Response
app.get('/healthcheck', (req, res) => {
    // 200 -> oK
    return res.status(200).json({
        msg: 'Estamos vivos!',
        alive: true
    });
});
//Listen -> ouvir (8080)



sequelize
    .authenticate()
    .then(() => {
        console.log("Conexão estabelecida com sucesso");
        return sequelize.sync();
    })

    .then(() => {
        app.listen(8080, () => {
            console.log("######################");
            console.log("Rodando no servidor 8080");
            console.log("######################")
        });
    })
    .catch((error) => {
        console.error("Erro ao se conectar com o banco", error);
    })