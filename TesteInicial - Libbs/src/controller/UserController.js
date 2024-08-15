const User = require("../models/User");
 
const UserController = {
    create: async (req, res) => {
        try {
            const { nome, senha, email } = req.body;
 
            const userCriado = await User.create({ nome, senha, email });
           
       
 
            return res.status(200).json({
                msg: 'Usuario criado com sucesso!',
                user: userCriado
            });
 
        } catch (error) {
            console.error(error);
            return res.status(500).json({ msg: 'Acione o Suporte' });
        }
    },
    update: async (req, res) => {
 
        try {
           
            const { id } = req.params;
            const { nome, senha, email } = req.body;
 
            console.log("Atualizando o objeto");
            console.log({ id });
            console.log({ nome, senha, email });
            const userUpdate = await User.findByPk(id);
            if(userUpdate == null){
            return res.status(200).json({
                msg: "Usuario atualizado com sucesso",
            })
        }
 
         const updated = await userUpdate.update({
            nome, senha, email
 
        });
        if(updated){
            return res.status(200).json({
                msg: "Usuário atualizado com sucesso!"
            });
        }
 
        return res.status(500).json({
            msg: "Erro ao atualizar usuário"
        });
        } catch (error) {
            console.log(error);
            return res.status(500).json({ msg: "acione o suporte" });
        }
 
 
    },
    getAll: async (req, res) => {
        try {
            const usuarios = await User.findAll();
            return res.status(200).json({
                msg: 'Usuarios encontrados!',
                usuarios
            });
 
             
        } catch (error) {
            console.error(error);
            return res.status(500).json({ msg: "Acione o Suporte" });
        }
    },
    getOne: async (req, res) => {
        try {
            const { id } = req.params;
            const usuarioEncontrado = await User.findByPk(id);
            if(usuarioEncontrado == null){
                return res.status(404).json({
                    msg: 'Usuario nao encontrado!'
                })
            }
            return res.status(200).json({
                msg: 'Usuario encontrado com sucesso!',
                usuario: usuarioEncontrado
            });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ msg: "Acione o Suporte" });
        }
    },
    delete: async (req, res) => {
        try {
            const { id } = req.params;
 
            const userFinded = await User.findByPk(id);
 
            if(userFinded == null) {
 
            return res.status(404).json({
                msg: "Usuario Deletado com sucesso!",
               
            })
        }
         await userFinded.destroy();
 
        } catch (error) {
            console.log(error);
            return res.status(500).json({ msg: "acione o suporte" });
        }
    },
 
};
module.exports = UserController