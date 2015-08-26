function simpleExample(value) {
	if (value) {
		var varValue = value;
		let letValue = value;

		console.log('inside block', varValue, letValue);
	}

	console.log('outside block');

	// varValue is available even though it was defined
	// in if-block because it was "hoisted" to function scope
	console.log(varValue);

	try {
		// letValue is a ReferenceError because it
		// was defined w/in if-block
		console.log(letValue);
	}
	catch (e) {
		// e is a ReferenceError
		console.log('letValue not accessible', e);
	}
}

simpleExample(2);