//Nome,email e senha todos são String
// req =request
//res = response
//next = NextFunction
const validateUser = (req,res,next) => {
    const { nome, email, senha} = req.body;

    //prenchido / não prenchido
    if(!nome || !email || !senha) {
        return res.status(400).json({
            msg:"Campos invalidos, abre o olho cabra",
        });
    }
    //pode ir ta tudo certo
    return next();
};

const validateUserId = ( req, res, next) =>{
    const {id}= req.params;

    if(!id){
        return res.status(400).json({
            msg:"Parametro faltando",
        });
    }
    return next();
};

module.exports = { validateUser, validateUserId };