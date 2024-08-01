
const express = require('express');
const router = require('./router/router')
const app = express();

//modelo de API JSON
app.use(express.json());
app.use('/app/user', router);
// REQ -> requisição
// RES -> Response

app.get('/healthcheck', (req, res) => {
    // 200 -> OK
    return res.status(200).json({
      msg:'Estamos vivos!',
      alive:true  
    });
});
// Listen -> Ouvir (8080)
app.listen(8080, () => {
    console.log("###########################");
    console.log("Estamos online na http:8080")
    console.log("###########################");
});