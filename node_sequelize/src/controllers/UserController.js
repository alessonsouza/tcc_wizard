const User = require('../models/User.js');
const bcrypt = require('bcryptjs');

const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth.json');


function generateToken(params = {}) {
    return  jwt.sign(params, authConfig.secret, {
        expiresIn: 7200,
    });
}


module.exports = {
     async login(req, res){
        const { password, email , isLogged }  = req.body;

        const user = await User.findOne({ where: { email}});

        if (!user) {
            return res.status(400).send({
                status: 0,
                message: 'E-mail ou senha incorreto!'
            });
        }

        if (!bcrypt.compareSync(password, user.password)) {
            return res.status(400).send({
                status:0,
                message:'E-mail ou senha incorreta!'
            });
        }

        const user_id = user.id;

        await User.update({
            isLogged

        },  {
            where: {
                id: user_id
            }
        });

        user.password = undefined;

        const token = generateToken({ user });

        return res.status(200).send({
            status:1,
            message: "Usuário logado com sucesso",
            user, token
        });
     },

    async index(req, res) {
        //busca tudo que tem na tabela
        let users = await User.findAll();

        if (users == "" || users == null) {
            return res.status(200).send({ message: "Nenhum usuario encontrado!"});
        }
        return res.status(200).send({ users });
    },

    async loadSession(req, res) {
                
        // const { user_id} = req.params;
        const token = req.headers.authorization.split(' ')[1]

        // let users = await User.findByPk(user_id);

        // if (users == "" || users == null) {
        //     return res.status(200).send({ message: "Nenhum usuario encontrado!"});
        // }
        // res.status(401).send({message: token})
        // return
        jwt.verify(token, authConfig.secret, (err, decoded) => {

            // if (err) {
            //     res.status(401).send({message: err})
            //     return
            // }
            
            res.status(200).send({
                token,
                user: decoded.user
            })
        })

        // return res.status(200).send({ users });
    },
    async store(req, res) {
        const { name, password, email} = req.body; //pego os dados

        const user = await User.create({ name, password, email}); // crio o usuário

        const token = generateToken({user});

        return res.status(200).send({ // retorno o resultado do POST
            status: 1,
            message: 'Usuário cadastrado com sucesso!',
            user, token
        })

    },
    async update(req, res) {

        const { name, password, email} = req.body;
        const { user_id} = req.params;

        const salt = bcrypt.genSaltSync();
        password = bcrypt.hashSync(password, salt);

        await User.update({
            name, password, email
        }, {
            where : {
                id: user_id
            }
        });

        return res.status(200).send({
            status: 1,
            message: 'Usuário atualizado com sucesso!',
        })


    },
    async delete(req, res) {
        const { user_id} = req.params;

        await User.destroy({
            where : {
                id: user_id
            }
        });

        return res.status(200).send({
            status: 1,
            message: 'Usuário deletedado com sucesso!',
        })
    }
   
}