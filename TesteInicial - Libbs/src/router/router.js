const { Router } = require("express");
const UserController = require("../controller/UserController")

const router = Router();

//configurar as rotas { CRUD }
router.post('/', (req,res) => {
    UserController.create(req,res)
});
router.get('/', (req,res) =>{
    UserController.getAll(req,res)
});
// USAR DEPENDENDO DA EMPRESA OU EQUIPE
// /api/users/:id -> /api/users/3217 (parametro) +facil para o front
// /api/users?id=3216 -> (query) + usado em sistema de pesquisa
// /api/search?s=Arthur%Rosa% -> (query)
// {body: { id: "3212" } } -> ( Body ) criar e atualizar
router.delete('/:id', (req,res) => {
    UserController.delete(req,res)
});
router.put('/:id', (req,res) =>{
    UserController.update(req,res)
});
router.get('/:id', (req,res) =>{
    UserController.getOne(req,res)
});

module.exports = router;