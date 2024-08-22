const validateClient = (req,res,next) =>{
    const {nome , idade, rg, cpf, enderenco, email, senha} = req.body;

    if(!nome || idade || rg || cpf || enderenco || email || senha){
        return res.status(400).json({
            mgs:"Campos invalidos, Abre o olho fi",
        })
    }
    return next();

};

const validateClientId = (req,res,next)  =>{
    const {id} = req.params;
    if(!id){
        return res.status(400)({
            mgs:"Parametro faltando",
        });
    }
    return next();
};

module.exports = {validateClient, validateClientId};