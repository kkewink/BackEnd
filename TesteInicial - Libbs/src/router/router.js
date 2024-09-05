const { Router } = require("express");
const RouteU = require("./routerUser");
const RouteP = require("./routerProduct");
const RouteC = require("./routerClient");
const authenticateToken = require("../middlewares/authenticateToken");

const uploadRoutes = require ('./routerUpload');

router.use('/image', uploadRoutes);


//USUARIO
const router = Router();
router.use('/user', RouteU);

router.post('/login', (req,res) => {
    UserController.login(req,res)
})

//PRODUTO

router.use('/product', RouteP)

//CLIENTE

router.use('/client', RouteC)

module.exports =  router;

