
const express = require('express');

const app = express();
//modelo de API JSON
app.use(express.json());
// REQ -> requisição
// RES -> Response

app.get('/healthcheck', (req, res) => {
    // 200 -> OK
    return res.status(200).json({
      msg:'Estamos vivos!',
      alieve:true  
    });
});
// Listen -> Ouvir (8080)
app.listen(8080, () => {
    console.log("###########################");
    console.log("Estamos online na http:8080")
    console.log("###########################");
});