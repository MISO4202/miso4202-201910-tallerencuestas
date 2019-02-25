var ENCUESTA = require('../dao/encuesta');
 

//Initlizing interface object of this model.
var preguntasModel = {};



//function to get preguntas listings
preguntasModel.get = function(idmodulo,idpregunta,callback){
	
	//Retorna la primera pregunta
	if(idmodulo === undefined && idpregunta===undefined){
		ENCUESTA.getPrimero(callback);
	}else if(idpregunta){
		ENCUESTA.getPregunta(idpregunta,callback);		
	}
	else if(idmodulo){
		ENCUESTA.getPrimeroModulo(idmodulo,callback);		
	}
	else{
		callback("Error",null);
	}
	
}

preguntasModel.save = function(respuestas,callback){

	if(!respuestas){
		callback("Error",null);
	}else{
		ENCUESTA.saveData(respuestas,callback);
	}
}

preguntasModel.results = function(callback){

	ENCUESTA.results(callback);

}




module.exports = preguntasModel;