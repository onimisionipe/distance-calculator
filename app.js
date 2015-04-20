calc = require('./index.js')

//short result format
calc.calcDistance('ohio', 'chicago', 'ko', function(result){
	console.log("Short output:" +result)
});

//JSON output
calc.calcDistanceJSON('ohio', 'chicago', 'ko', function(result){
	console.log("JSON output:" + result)
});

