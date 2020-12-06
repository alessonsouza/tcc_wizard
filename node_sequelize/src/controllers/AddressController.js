const User = require('../models/User.js');
const Address = require('../models/Address.js');


module.exports = {
    async pesquisar(req, res) {
        //busca tudo que tem na tabela

        const { user_id } = req.params;

        const user = await User.findByPk(user_id,{
            include: { association: 'address'}
        });

        if (!user) {
            return res.status(400).send({
                status: 0,
                message: "Nenhum endereço encontrado!"
            });
        }
        return res.status(200).send(user);
    },

    async salvar(req, res) {


        const {user_id} = req.params;
        const { street, number, district, city } = req.body; //pego os dados

        const user = await User.findByPk(user_id); // crio o usuário

        if (!user) {
            return res.status(400).json({
                status:0,
                message: 'Usuário não encontrado!'
            });
        }
        const address = await Address.create({
            street,
            number,
            district,
            city,
            user_id
        });

        return res.status(200).send({ // retorno o resultado do POST
            status: 1,
            message: 'Address cadastrado com sucesso!',            
            address
        });

    },
    async atualizar(req, res) {

        const {  street, number, district, city} = req.body;
        const id = req.params.id;
        
        await Address.update({
            street, number, district, city
        }, {
            where : {
                id
            }
        });

        return res.status(200).send({
            status: 1,
            message: 'Adress atualizado com sucesso!',
        })


    },
    async deletar(req, res) {
        const id = req.params.id;

        const address = await Address.findByPk(id);

        if (address) {
            await Address.destroy({
                where : {
                    id
                }
            });

            return res.status(200).send({
                status: 1,
                message: 'Usuário deletedado com sucesso!',
            })

        } else {
            return res.status(400).send({
                status: 0,
                message: 'Adress não encontrado!',
            })
        }
    
        
    }
   
}