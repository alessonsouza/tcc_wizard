const Alunos = require('../models/Alunos.js');
const bcrypt = require('bcryptjs');

const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth.json');


function generateToken(params = {}) {
    return  jwt.sign(params, authConfig.secret, {
        expiresIn: 7200,
    });
}


module.exports = {    
    async index(req, res) {
        //busca tudo que tem na tabela
        let alunos = await Alunos.findAll();

        if (alunos == "" || alunos == null) {
            return res.status(200).send({ message: "Nenhum aluno encontrado!"});
        }
        return res.status(200).send({ alunos });
    },
    async store(req, res) {
        
        const { name, idade, cpf, mae, pai} = req.body; //pego os dados

        const aluno = await Alunos.create({ name, idade, cpf, mae, pai}); // crio o usuário
        console.log(aluno)
        const token = generateToken({aluno});

        return res.status(200).send({ // retorno o resultado do POST
            status: 1,
            message: 'Aluno cadastrado com sucesso!',
            aluno, token
        })

    },
    async update(req, res) {

        const { name,  idade, cpf, mae, pai} = req.body;
        const { aluno_id } = req.params;

        await Alunos.update({
            name,  idade, cpf, mae, pai
        }, {
            where : {
                id: aluno_id
            }
        });

        return res.status(200).send({
            status: 1,
            message: 'Aluno atualizado com sucesso!',
        })


    },
    async delete(req, res) {
        const { aluno_id} = req.params;

        await Alunos.destroy({
            where : {
                id: aluno_id
            }
        });

        return res.status(200).send({
            status: 1,
            message: 'Aluno deletedado com sucesso!',
        })
    }
   
}