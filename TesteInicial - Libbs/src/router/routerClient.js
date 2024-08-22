const { Router } = require("express");
const {validateClient, validateClientId} = require("../middlewares/ValidateClient");
const ClientController = require("../controller/ClientController");


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



module.exports = routerC;
 