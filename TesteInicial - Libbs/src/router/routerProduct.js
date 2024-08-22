const { Router } = require("express");
const ProdutoController = require("../controller/ProductController");
const { validateProductId, validateProduct } = require("../middlewares/ValidateProduct");


const routerP = Router();
//Configurar as Rotas ( CRUD )
routerP.post('/product/', validateProduct, (req,res) => {
    ProdutoController.create(req, res)
 
});
routerP.get('/product/', (req,res) => {
    ProdutoController.getAll(req, res)
 
});
routerP.delete('/product/:id', validateProductId, (req,res) => {
    ProdutoController.delete(req, res)
 
});
routerP.put('/product/:id', validateProductId,validateProduct, (req,res) => {
    ProdutoController.update(req, res)
 
});
routerP.get('/product/:id', validateProductId,validateProduct, (req,res) => {
    ProdutoController.getOne(req, res)
});

module.exports = routerP;