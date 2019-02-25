const express = require('express');
var preguntas = require('../controllers/preguntas');
const router = express.Router();



//properties routes
router.get('/pregunta',  preguntas.get);

router.post('/pregunta',  preguntas.post);

router.get('/results',  preguntas.results);




module.exports = router;