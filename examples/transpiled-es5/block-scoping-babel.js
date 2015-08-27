'use strict';

function varExample() {
	var myVar = 7;

	console.log('myVar after declaration', myVar);

	// even though laterVar is defined later on in the function
	// it is "hoisted" to the beginning of the function &
	// initialized to undefined. In most C-style languages this would
	// be an error.
	console.log('laterVar before declaration', laterVar);

	laterVar = 10;

	// image some legitimate conditional
	if (myVar < 20) {
		// accidental redefintion of myVar
		var myVar = 'foo';
		var innerVar = true;

		console.log('myVar inside block', myVar);
	}

	// since this declaration was "hoisted", it's as if it's no
	// longer here but at the top of the function
	var laterVar;

	// looking at the code laterVar *should* be undefined,
	// but it has the value 10 from earlier
	console.log('laterVar after declaration', laterVar);

	// we would expect myVar to still be 7
	// but it was redefined and overwritten
	// w/in the conditional
	console.log('myVar outside block', myVar === 7);

	// we would expect innerVar to no longer be accessible
	// since it was defined w/in the if-block, but it was
	// "hoisted" as well
	console.log('innerVar outside block', innerVar);
}

function letExample(value) {
	if (value) {
		var _letValue = value;

		console.log('inside block', _letValue);

		// redeclaration of letValue would be a TypeError
		//let letValue = 'foo';
	}

	try {
		// Accessing letValue is a ReferenceError because it
		// was defined w/in if-block
		console.log(letValue);

		// if we get here, it means that the JS engine didn't
		// throw an exception, which means that the engine
		// (or transpiled code) did not faithfully reproduce
		// how let should work
		console.log('let not faithfully handled');
	} catch (e) {
		// e is a ReferenceError
		console.log('letValue not accessible', e);
	}
}

varExample();
letExample(2);

//# sourceMappingURL=block-scoping-babel.js.map