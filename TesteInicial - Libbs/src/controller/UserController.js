
const UserController = {
    create: async (req,res) => {
        try{
            const {nome, idade , senha, email} = req.body;

            console.log({nome,idade,senha,email});
            
            return res.status(200).json({
                msg:"Usuario criado com sucesso!"
            });
        } catch (error){
            console.error(error);
            return res.status(500).json({msg:'Acione o Suporte'})
        }
    },
    update: async (req,res) => {
        try{
            const {id} = req.params;
            const {nome, idade, senha, email} = req.body;

            console.log("Atualizado o objeto");
            console.log({ id });
            console.log({ nome, idade, senha, email});

            const userUpdate =await User.findByPk(id);

            if(userUpdate ==null) {
                return res.status(404).json({
                    msg: "Usuario nao encontrado"
                })
            }


            const updated = await userUpdate.update({
                nome, senha, email
            });
            
            if(updated) {
                return res.status(200).json({
                    msg:"Usuario atualizado com sucesso!",
                });
            }

            return res.status(200).json({
                msg: "Erro ao atualizar usuario"
            })
        } catch (error){
            console.error(error);
            return res.status(500).json({msg:'Acione o Suporte'})
        }
    },
    getAll: async (req,res) => {
        try{
            const usuarios = await UserController.findAll();
            return res.status(200).json({
                msg:'Usuarios encontrados!',
                usuarios,
            });
        } catch (error){
            console.error(error);
            return res.status(500).json({msg:'Acione o Suporte'})
        }
    },
    getOne: async (req,res) => {
        try{
            const {id} = req.params

            const usuarioEncontrado = await User.findByPk(id);
            if(usuarioEncontrado ==null)  {
                return res.status(200).json({
                    msg:'Usuario encontrado com sucesso!',
                    usuario:{}
                });
            }
            
        } catch (error){
            console.error(error);
            return res.status(500).json({msg:'Acione o Suporte'})
        }
    },
    delete: async(req,res) => {
        try{

            const { id } =req.params

            const userFinded = await User.findByPk(id);

            if(userFinded == null) {
                return res.status(400).json({
                    msg:"user não encontrado"
                })
            }

            await userFinded.destroy();

            return res.status(200).json({
                msg:'Usuario deletado com sucessos!',
                user: userFinded,
            });
        } catch (error){
            console.error(error);
            return res.status(500).json({msg:'Acione o Suporte'})
        }
    },
}
module.exports = UserController