const validateProduct = (req,res,next) =>{
    const { nome, preco , quantidade, categoria, descricao } = req.body;
    
    if(!nome || !preco || !quantidade || !categoria || !descricao) {
        return res.status(400).json({
            mgs:"Campos invalidos, ABRE O OLHO FI",
        })
    }

    return next();
};

const validateProductId = (req,res,next) =>{
    const {id} = req.params;

    if(!id){
        return res.status(400).json({
            mgs:"Paramentro faltando",
        });
    }
    return next();
};

module.exports = {validateProduct, validateProductId};