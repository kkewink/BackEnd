const { Router } = require("express");
const userRouteU = require("./routerUser","./routerProduct");
const userRouteP = require("./routerUser","./routerProduct");
const userRouteC = require("./routerUser","./routerProduct");

//USUARIO
const router = Router();
router.use('/user', userRouteU);
module.exports = router;


//PRODUTO
const routerP = Router();
router.use('/product', userRouteP)
module.exports = routerP;

//CLIENTE
const routerC = Router();
router.use('/client', userRouteC)
module.exports = routerC;

