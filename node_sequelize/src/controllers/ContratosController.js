const Contratos = require('../models/Contratos.js');
const Alunos = require('../models/Alunos.js');
const bcrypt = require('bcryptjs');

const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth.json');


function generateToken(params = {}) {
    return jwt.sign(params, authConfig.secret, {
        expiresIn: 7200,
    });
}


module.exports = {
    async index(req, res) {
        //busca tudo que tem na tabela
        let contratos = await Contratos.findAll({
            include: { model: Alunos,
                as: 'alunos'}
        });


        if (contratos == "" || contratos == null) {
            return res.status(200).send({ message: "Nenhum usuario encontrado!" });
        }
        return res.status(200).send({ contratos });
    },
    async getById(req, res) {
        //busca tudo que tem na tabela
        let contratos = await Contratos.findByPk(req.params.id);
        if (contratos == "" || contratos == null) {
            return res.status(200).send({ message: "Nenhum usuario encontrado!" });
        }
        return res.status(200).send({ contratos });
    },
    async store(req, res) {
        const {
            aluno_id,
            curso,
            professor,
            horario,
            dia_semana,
            livro
        } = req.body; //pego os dados



        const contratos = await Contratos.create({
            aluno_id,
            curso,
            professor,
            horario,
            dia_semana,
            livro
        }); // crio o usuário

        const token = generateToken({ contratos });

        return res.status(200).send({ // retorno o resultado do POST
            status: 1,
            message: 'Contrato cadastrado com sucesso!',
            contratos, token
        })

    },
    async update(req, res) {

        const {
            aluno_id,
            curso,
            professor,
            horario,
            dia_semana,
            livro,
            createdAt,
            updatedAt
        } = req.body;
        console.log(req.body);
        const { id_con } = req.params;

        console.log('IDDDDDDDDDDDDdd = ', id_con);


        await Contratos.update({
            aluno_id,
            curso,
            professor,
            horario,
            dia_semana,
            livro
        }, {
            where: {
                id: id_con
            }
        });

        return res.status(200).send({
            status: 1,
            message: 'Contrato atualizado com sucesso!',
        })


    },
    async delete(req, res) {
        const { id } = req.params;

        await Contratos.destroy({
            where: {
                id: id
            }
        });

        return res.status(200).send({
            status: 1,
            message: 'Contrato deletedado com sucesso!',
        })
    }

}