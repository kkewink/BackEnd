const { Router } = require("express");
const {validateClient, validateClientId} = require("../middlewares/ValidateClient");
const ClientController = require("../controller/ClientController");


const routerC = Router();

routerC.post('/', validateClient, (req,res) => {
    ClientController.create(req,res)
});

routerC.get('/',(req,res) => {
    ClientController.getAll(req,res)
});
routerC.delete('/:id', validateClientId, (req,res) => {
    ClientController.delete(req,res)
});
routerC.put('/:id' ,validateClientId,validateClient, (req,res) => {
    ClientController.update(req,res)
});
routerC.get('/:id', validateClientId, (req,res) => {
    ClientController.getOne(req,res)
});



module.exports = routerC;
 