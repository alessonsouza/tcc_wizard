const User = require('../models/User');
const Course = require('../models/Course');
const { pesquisar, salvar, deletar } = require('./UserController');


module.exports = {
    async pesquisar(req, res) {
        const { user_id} = req.params;

        const user  = await User.findByPk(user_id, { 
            include: {association: 'courses', through: { attributes: [] } } // o thtough define os campos que quero que retorne
        });

        if (!user) {
            return res.status(400).send({
                status:0,
                message: 'Curso não encontrado!',
            });
        }

        return res.status(200).send(user.courses);
    },
    async salvar(req, res) {


        const { user_id } = req.params; // pega o ID como parameto
        const { name } = req.body; // pegamos o "name" da requisição POST

        const user = await User.findByPk(user_id); // pegamos o Usuário

        if (!user) {
            return res.status(400).send({
                status:0,
                message: 'Curso não encontrado!',
            });
        }

        const [ course ] = await Course.findOrCreate({ // verifica se já existe o curso, se existir ele só fará o relacionamento, e 
            // e não duplicará o regitro, se não existir criará um novo
            where: { name }
        });

        await user.addCourse(course); // Adiciona este o novo curso, caso ele não existe

        return res.status(400).json
        ({
                status:1,
                message: 'Curso cadastrado com sucesso!',
                course
            });
        
    },

    async deletar(req, res) {

        const { user_id } = req.params; // pega o ID como parameto
        const { name } = req.body; // pegamos o "name" da requisição POST

        const user = await User.findByPk(user_id); // pegamos o Usuário

        if (!user) {
            return res.status(400).send({
                status:0,
                message: 'Curso não encontrado!',
            });
        }
        const course = await Course.findOrCreate({
            where: { name }
        });

        await user.removeCourse(course);

        await res.status(200).json({
            status: 1,
            message: "Relacionamento deletado com sucesso!"
        });

    }
}