(function() {
	'use strict';

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
			// accidental redefintion of myVar results
			// in outer defined myVar being reassigned
			// to 'foo'
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
			let letValue = value;

			console.log('inside block', letValue);

			// redeclaration of letValue would be a TypeError
			// let letValue = 'foo';
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
		}
		catch (e) {
			// e is a ReferenceError
			console.log('letValue not accessible', e);
		}
	}

	function letShadowExample() {
		let x = 15;

		if (true) {
			// this x "shadows" the x defined in the outer scope.
			// this new x just exists within the scope of the
			// if-block
			let x = 21;

			// x should be 21
			console.log('x inner block', x);
		}

		// x should be 15
		console.log('x outer block', x);
	}

	function constExample() {
		const NAME_KEY = 'name';
		const UNFROZEN_OBJ_CONST = {key: 'adam', val: 'eve'};
		const FROZEN_OBJ_CONST = Object.freeze({key: 'jesus', val: 'paul'});

		// All const declerations must be initialized.
		// It's a SyntaxError otherwise
		// const VALUE_KEY;

		// Const variables are read-only, so trying to
		// reassign is a SyntaxError too
		// NAME_KEY = 'key';

		// GOTCHA: even though the object is const, you can still
		// change properties of it. It's the variable
		// that cannot be reassigned
		UNFROZEN_OBJ_CONST.key = 'moses';

		// by freezing the object, using ES5 Object.freeze
		// its properties cannot be changed.
		// in strict mode this a TypeError. In non-strict
		// mode the value silently doesn't change
		// FROZEN_OBJ_CONST.val = 'peter';

		console.log('const value', NAME_KEY);
		console.log('unfrozen object', UNFROZEN_OBJ_CONST);
		console.log('frozen object', FROZEN_OBJ_CONST);
	}


	simpleExample(2);
	varExample();
	letExample(2);
	letShadowExample();
	constExample();
}) ();
