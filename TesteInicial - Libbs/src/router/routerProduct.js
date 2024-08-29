const { Router } = require("express");
const ProdutoController = require("../controller/ProductController");
const { validateProductId, validateProduct } = require("../middlewares/ValidateProduct");


const router = Router();
//Configurar as Rotas ( CRUD )
router.post('/', validateProduct, (req,res) => {
    ProdutoController.create(req, res)
 
});
router.get('/', (req,res) => {
    ProdutoController.getAll(req, res)
 
});
router.delete('/:id', validateProductId, (req,res) => {
    ProdutoController.delete(req, res)
 
});
router.put('/:id', validateProductId,validateProduct, (req,res) => {
    ProdutoController.update(req, res)
 
});
router.get('/:id', validateProductId, (req,res) => {
    ProdutoController.getOne(req, res)
});

module.exports = router;