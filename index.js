/**
*
call calculateDistance function to return distance in kilometre as default
*
**/


module.exports = {
	calcDistance: function(origins, destinations, lang, callback){
		var helper = require('./helper.js');
		var opt = helper.prepareReq(origins, destinations, lang);
		var req = helper.makeRequest(opt.host, opt.path,function(result){
			callback(helper.shortOutput(result))
		});
		
		
	},

	calcDistanceJSON: function(origins, destinations, lang, callback){
		var helper = require('./helper.js');
		var opt = helper.prepareReq(origins, destinations, lang);
		var req = helper.makeRequest(opt.host, opt.path,function(result){
			callback(helper.JSON_output(result))
		});

		
		
	}

	

}