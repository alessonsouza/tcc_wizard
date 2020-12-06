const express = require('express');
const UserController = require('./controllers/UserController');
const AddressController = require('./controllers/AddressController');
const CourseController = require('./controllers/CourseController');
const AlunoController = require('./controllers/AlunosController');
const ContratoController = require('./controllers/ContratosController');
const authMiddleware = require('./middlewares/auth');
const cors = require('cors');

const router = express.Router();

var options = {
    origin: 'http://localhost:8080'
}

router.get('/users', authMiddleware, UserController.pesquisar);
router.post('/users', UserController.salvar);
router.put('/users/:user_id', UserController.atualizar);
router.delete('/users/:user_id', UserController.deletar);
//login
router.post('/users/login', cors(options), UserController.login);
router.get('/users/load-session', UserController.loadSession);

router.use(authMiddleware);

router.get('/alunos', AlunoController.pesquisar);
router.post('/alunos', AlunoController.salvar);
router.put('/alunos/:aluno_id', AlunoController.atualizar);
router.delete('/alunos/:aluno_id', AlunoController.deletar);

router.get('/contratos', ContratoController.pesquisar);
router.get('/contratos/getById/:id', ContratoController.getById);
router.post('/contratos', ContratoController.salvar);
router.put('/contratos/:id_con', ContratoController.atualizar);
router.delete('/contratos/:id', ContratoController.deletar);

router.get('/users/:user_id/address', AddressController.pesquisar);
router.post('/users/:user_id/address', AddressController.salvar);
router.put('/users/:id/address', AddressController.atualizar);
router.delete('/users/:id/address', AddressController.deletar);

router.get('/users/:user_id/courses', CourseController.pesquisar);
router.post('/users/:user_id/courses', CourseController.salvar);
router.delete('/users/:user_id/courses', CourseController.deletar);

module.exports = router;
