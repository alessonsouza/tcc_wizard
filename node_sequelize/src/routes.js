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
// router.get('/', (req, res) => {
//     return res.send('viado!');
// });

router.get('/users', authMiddleware, UserController.index);


router.post('/users', UserController.store);
router.put('/users/:user_id', UserController.update);
router.delete('/users/:user_id', UserController.delete);
//login
router.post('/users/login', cors(options), UserController.login);
router.get('/users/load-session', UserController.loadSession);

router.get('/alunos', AlunoController.index);
router.post('/alunos', AlunoController.store);
router.put('/alunos/:id', AlunoController.update);
router.delete('/alunos/:id', AlunoController.delete);

router.get('/contratos', ContratoController.index);
router.post('/contratos', ContratoController.store);
router.put('/alunos/:id/contratos', ContratoController.update);
router.delete('/alunos/:id/contratos', ContratoController.delete);



router.use(authMiddleware);

router.get('/users/:user_id/address', AddressController.index);
router.post('/users/:user_id/address', AddressController.store);
router.put('/users/:id/address', AddressController.update);
router.delete('/users/:id/address', AddressController.delete);

router.get('/users/:user_id/courses', CourseController.index);
router.post('/users/:user_id/courses', CourseController.store);
router.delete('/users/:user_id/courses', CourseController.delete);







module.exports = router;
