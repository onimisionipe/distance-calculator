/**
Helpers for distance calculator
**/
module.exports = {

makeRequest : function(api_host, req_str, func){
	var http = require('http');
	var options = {
		host: api_host,
		path: req_str
	},

	callback = function(response){
		var json = '';
		response.on('data', function(chunk){
			json += chunk;
		});
		response.on('end', function(){
			body = json;
			func(json);
		})
	},

		
	get = function(){
		http.get(options, callback);
	}
	return get()	
	
},

prepareReq : function(origins, destinations, lang){
	var default_host = "maps.googleapis.com";
	var long_path = "/maps/api/distancematrix/json?origins="+origins+"&destinations="+destinations+"&language="+lang;

	return {
		host: default_host,
		path: long_path
	}

},

shortOutput : function(body){
	var obj = JSON.parse(body)
	var elem = obj.rows[0].elements[0];
	return elem.distance.text +", "+elem.duration.text 
	
},

JSON_output : function(body){
	return body
}, 

outputBy: function(body){
	var obj = JSON.parse(body)
	var elem = obj.rows[0].elements[0];
	return {
		distance: elem.distance.value,
		distance_km: elem.distance.text,
		duration_sec: elem.duration.value,
		duration_hr: elem.duration.text
	}
}
}