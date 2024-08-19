const { Router } = require("express");
const UserController = require("../controller/UserController");
const ProdutoController = require("../controller/ProductController")
 
 
const router = Router();
//Configurar as Rotas ( CRUD )
router.post('/', (req,res)=>{
    UserController.create(req, res)
 
});
router.get('/', (req,res)=>{
    UserController.getAll(req, res)
 
});
router.delete('/:id', (req,res)=>{
    UserController.delete(req, res)
 
});
router.put('/:id', (req,res)=>{
    UserController.update(req, res)
 
});
router.get('/:id', (req,res)=>{
    UserController.getOne(req, res)
});



const routerP = Router();
//Configurar as Rotas ( CRUD )
routerP.post('/product', (req,res)=>{
    ProdutoController.create(req, res)
 
});
routerP.get('/', (req,res)=>{
    ProdutoController.getAll(req, res)
 
});
routerP.delete('/:id', (req,res)=>{
    ProdutoController.delete(req, res)
 
});
routerP.put('/:id', (req,res)=>{
    ProdutoController.update(req, res)
 
});
routerP.get('/:id', (req,res)=>{
    ProdutoController.getOne(req, res)
});
 
module.exports = routerP;
module.exports = router;
 