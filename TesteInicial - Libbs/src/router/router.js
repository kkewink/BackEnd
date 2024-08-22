const { Router } = require("express");
const UserController = require("../controller/UserController");
const ProdutoController = require("../controller/ProductController");
const { validateUser, validateUserId } = require("../middlewares/ValidateUser");
const { validateProductId, validateProduct } = require("../middlewares/ValidateProduct");
 const {validateClient, validateClientId} = require("../middlewares/ValidateClient");
const ClientController = require("../controller/ClientController");
 
const router = Router();
//Configurar as Rotas ( CRUD )
//obj
router.post('/', validateUser, (req,res)=>{
    UserController.create(req, res)
 
});
router.get('/', (req,res)=>{
    UserController.getAll(req, res)
 
});
router.delete('/:id', validateUserId, (req,res)=>{
    UserController.delete(req, res)
 
});
router.put('/:id', validateUserId, validateUser, (req,res)=>{
    UserController.update(req, res)
 
});
router.get('/:id', validateUserId,validateUser, (req,res)=>{
    UserController.getOne(req, res)
});


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


const routerC = Router();

routerC.post('/client', validateClient, (req,res) => {
    ClientController.create(req,res)
});

routerC.get('/client/:id',(req,res) => {
    ClientController.get(req,res)
});
routerC.delete('/client/:id', validateClientId, (req,res) => {
    ClientController.delete(req,res)
});
routerC.put('/client/:id' ,validateClientId,validateClient, (req,res) => {
    ClientController.update(req,res)
});
routerC.get('/client/:id', validateClientId,validateClient, (req,res) => {
    ClientController.getOne(req,res)
});


module.exports = routerP;
module.exports = router;
module.exports = routerC;
 