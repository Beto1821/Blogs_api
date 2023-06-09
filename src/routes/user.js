const { Router } = require('express');
const { insert, get, getId, deleteMe } = require('../controllers/user');
const validaToken = require('../middlewares/validaToken');

const userRoutes = Router();

userRoutes.post('/user', insert);
userRoutes.get('/user', validaToken, get);
userRoutes.get('/user/:id', validaToken, getId);
userRoutes.delete('/user/me', validaToken, deleteMe);

module.exports = userRoutes;