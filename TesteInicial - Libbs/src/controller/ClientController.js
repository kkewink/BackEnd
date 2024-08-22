const Client = require("../models/Client");

const ClientController = {
    create: async(req , res) => {
        try{
            const {nome, idade, rg, cpf, endereco, email , senha} = req.body;
            const clientCriado = await Client.create({nome, idade, rg, cpf, endereco, email, senha});

            return res.status(200).json({
                msg: 'Client criado com sucesso!',
                client: clientCriado
            });
        }catch (error){
            console.error(error);
            return res.satus(500).json({msg: 'Chama o bombeiro aquele meme lá KKKKKKK'});
        }

    },
    update: async(req,res) =>{
        try {
            const {id} = req.params;
            const {nome,idade,rg,cpf,endereco,email,senha} = req.body;
            

            console.log("Atualizado o client");
            console.log({id});
            console.log({nome,idade,rg,cpf,endereco,email,senha});
            
            const clientUpdate = await Client.findByPk(id);
            if(clientUpdate == null){
                return res.status(200).json({msg: 'Client Atualizado com sucesso!' });
            }

            const update = await clientUpdate.update({
                nome,idade, rg, cpf,endereco,email,senha
            });
            if(update){
                return res.status(200).json({
                    msg:"Client atualizado com sucesso!"
                });
            }

            return res.status(500).json({
                msg:"Erro ao atualizar usuário"
            })
            } catch (error) {
                console.log(error);
                return res.status(500).json({msg:"Calma Calabreso aquele meme lá KKKKKKKKK"});
        }
    },

    getAll: async(req, res) =>{
        try{
            const clientes = await Client.findAll();
            return res.status(200).json({
                msg: 'Clients encontrados!',
                clientes
            });
        } catch(error){
            console.error(error);
            return res.status(500).json({ msg:" Esse Erro todo amostradinho aquele meme lá KKKKKKKK"});
        }
    },
    
    getOne: async (req,res) => {
        try {
            const {id} = req.params;
            const clientEncontrado = await Client.findByPk(id);
            if(clientEncontrado == null){
                return res.status(400).json({
                    msg:'Client não encontrado!',
                });
            }
            return res.status(400).json({
                msg:'Client encontrado com sucesso!',
                cliente: clientEncontrado
            });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ msg: 'Acione o Suporte'});
        }
    },

    delete: async(req,res) => {
        try {
            const { id } = req.params;

            const clientFinded = await User.findByPk(id);

            if(clientFinded == null ){
                return res.status (400).json({
                    msg: "Cliente Deletado com sucesso!",
                })
            }
            await clientFinded.destroy();
        } catch (error) {
                console.log(error);
                return res.status(500).json({ msg: "Bora bill Bora suporte do bill aquele meme là KKKKK"});
        }
    },
};
module.exports = ClientController