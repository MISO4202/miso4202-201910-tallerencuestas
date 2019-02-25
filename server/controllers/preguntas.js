var preguntasModel = require('../models/preguntas');

var preguntas = {};

// controller that handles preguntas listings fetch request.
preguntas.get = function (req, res) {
	
	var idmodulo = req.query.idmodulo;

	var idpregunta = req.query.idpregunta;

	
	preguntasModel.get(idmodulo,idpregunta,function(err,data){

		if(err){
			var response = {};
			response.status='error';
			response.data=err;
			res.send(response);
		}else{
			var response = {};
		response.status='success';
		response.data=data;
		res.send(response);
		}

	});

};

preguntas.post = function (req, res) {

	preguntasModel.save(req.body.data,function(err,data){
		if(err){
			var response = {};
			response.status='error';
			response.data=err;
			res.send(response);
		}else{
			console.log(req.body);
			var response = {};
			response.status='success';
			response.data="Guardado exitosamente";
			res.send(response);
		}
	});

	
}


preguntas.results = function (req, res) {


	
	preguntasModel.results(function(err,data){
		if(err){
			var response = {};
			response.status='error';
			response.data=err;
			res.send(response);
		}else{
			var response = {};
		response.status='success';
		response.data=data;
		res.send(response);
		}

	});

};



module.exports = preguntas;
		
		

