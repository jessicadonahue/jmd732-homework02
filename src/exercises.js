// exercises.js

//Returns the sum of the arguments as a Number, no arguments -> 0
function sum() {
	if (arguments == null) {
		return 0;
	}
	else {
		var sum = 0;
		for( var i = 0; i < arguments.length; i++) {
			sum += arguments[i];
		}

		sum = Number(sum);
		return sum;

	}

};

//It calls a function n times, passing in the argument arg at each call
function repeatCall(fn, n, arg) {

	for (var i = 0; i < n; i++) {
		fn(arg);
	}

}


function repeatCallAllArgs(fn, n) {

	var args = Array.prototype.slice.call(arguments);

	args = args.slice(2);

	for (var i = 0; i < n; i++) {

		fn.apply(this, args);
	}
	
}

function makePropertyChecker(prop) {

	return function(obj) {
		if (obj.hasOwnProperty(prop)) {
			return true;
		}
		else {
			return false;
		}
	}
}

function constrainDecorator(fn, min, max) {

	return function(arg) {
		var val = fn(arg);
		if (val < min || val > max) {
			if (val < min) {
				return min;
			}
			else if(val > max) {
				return max;
			}
		}
		else {
			return val;
		}
	}
}

function limitCallsDecorator(fn, n) {
	var numCalls = 0;

	return function(arg) {
		
		if(numCalls < n) {
			var val = fn(arg);
			numCalls++;
			return val;
		} 
		else {
			return undefined;
		}

	}

}

module.exports = {

	sum:sum,
	repeatCall: repeatCall,
	repeatCallAllArgs: repeatCallAllArgs,
	makePropertyChecker: makePropertyChecker,
	constrainDecorator: constrainDecorator,
	limitCallsDecorator: limitCallsDecorator


}