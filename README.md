# distance-calculator
Google Distance Calculator in For Node.js

#Usage:

	calc = require('distance-calculator')
	
	//short result format
	calc.calcDistance('ohio', 'chicago', 'es', function(result){
		console.log("Short output:" +result)
	});
	
	//JSON output
	calc.calcDistanceJSON('ohio', 'chicago', 'en', function(result){
		console.log("JSON output:" + result)
	});

