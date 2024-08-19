// const Product = require("../models/Product");

// const ProductController = {
//     create: async (req, res) => {
//         try {
//             const { nome, preco, quantidade } = req.body;
//             const productCriado = await Product.create({ nome, preco, quantidade });

//             return res.status(200).json({
//                 mgs: 'Produto criado com sucesso!',
//                 product: productCriado
//             });
//         } catch (error) {
//             console.error(error);
//             return res.status(500).json({ mgs: 'CHAME O TECNICO' });
//         }
//     }
// }


// module.exports = ProductController;