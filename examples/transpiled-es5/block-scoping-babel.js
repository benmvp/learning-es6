'use strict';

(function () {
	'use strict';

	function simpleExample(value) {
		var constValue = value;

		if (value) {
			var varValue = value;
			var _letValue = value;

			console.log('inside block', varValue, _letValue);
		}

		console.log('outside block');

		// varValue is available even though it was defined
		// in if-block because it was "hoisted" to function scope
		console.log(varValue);

		try {
			// letValue is a ReferenceError because it
			// was defined w/in if-block
			console.log(letValue);
		} catch (e) {
			// e is a ReferenceError
			console.log('letValue not accessible', e);
		}

		// SyntaxError to try and update a variable
		// declared via const
		//constValue += 1;
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
			var _letValue2 = value;

			console.log('inside block', _letValue2);

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
		} catch (e) {
			// e is a ReferenceError
			console.log('letValue not accessible', e);
		}
	}

	function letShadowExample() {
		var x = 15;

		if (true) {
			// this x "shadows" the x defined in the outer scope.
			// this new x just exists within the scope of the
			// if-block
			var _x = 21;

			// x should be 21
			console.log('x inner block', _x);
		}

		// x should be 15
		console.log('x outer block', x);
	}

	function constExample() {
		var NAME_KEY = 'name';
		var UNFROZEN_OBJ_CONST = { key: 'adam', val: 'eve' };
		var FROZEN_OBJ_CONST = Object.freeze({ key: 'jesus', val: 'paul' });

		// All const declarations must be initialized.
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

	function temporalDeadZoneExample() {
		// TDZ for `value` begins

		var func = function func() {
			// Even though this function is defined *before*
			// `value` in the code, it's not called until after
			// `value` is declared, so accessing it is OK.
			console.log('value is: ', value);
		};

		// TDZ for `value` continues. Accessing `value`
		// here would be a ReferenceError. Calling `func`
		// here would cause a ReferenceError.

		// TDZ ends with declaration of `value`
		var value = 'foo';

		// no longer in TDZ when calling function so now
		// any access of `value` is ok
		func();
	}

	function simpleLoopExample() {
		for (var i = 0; i < 5; i++) {
			console.log('i=', i);
		}
		for (var j = 0; j < 5; j++) {
			console.log('j=', j);
		}

		// i is accessible outside of the for loop
		// and has the value 5
		console.log('after i=', i);

		// j is not accessible outside of the for loop
		// and is a ReferenceError
		//console.log('after j=', j);
	}

	function callbackLoopVarExample() {
		var $body = $('body');

		for (var i = 0; i < 5; i++) {
			// create 5 buttons with the index in the name
			var $button = $('<button>var ' + i + '</button>');

			// wire click handler w/ callback using arrow function!
			$button.click(
			// BUG! When button is clicked, the value of `i` is 5!
			function () {
				return console.log('var button ' + i + ' clicked!');
			});

			// add button to the body
			$body.append($button);
		}
	}

	function callbackLoopNamedFunctionExample() {
		var $body = $('body');

		// Create a named function passing in the loop iteration variable
		// which creates a unique scope for each iteration so
		// that the callback function binds to its own variable.
		var loop = function loop(index) {
			// create 5 buttons with the index in the name
			var $button = $('<button>function ' + index + '</button>');

			// wire click handler w/ callback using arrow function!
			$button.click(
			// Fixed! `index` is unique per iteration
			function () {
				return console.log('function button ' + index + ' clicked!');
			});

			// add button to the body
			$body.append($button);
		};

		for (var i = 0; i < 5; i++) {
			loop(i);
		}
	}

	function callbackLoopLetExample() {
		var $body = $('body');

		var _loop = function (i) {
			// create 5 buttons with the index in the name
			var $button = $('<button>let ' + i + '</button>');

			// wire click handler w/ callback using arrow function!
			$button.click(
			// Fixed! `i` is a different variable declaration for
			// each iteration of the loop as one would expect!
			function () {
				return console.log('let button ' + i + ' clicked!');
			});

			// add button to the body
			$body.append($button);
		};

		for (var i = 0; i < 5; i++) {
			_loop(i);
		}
	}

	function parameterExample(values) {
		// redeclaration of a function parameter
		// is a TypeError
		// let values = [];

		{
			// this let declaration of `values` shadows
			// the `values` parameter
			var _values = [];

			console.log(_values); // []
		}

		// `values` here is the parameter value
		console.log(values);
	}

	simpleExample(2);
	varExample();
	letExample(2);
	letShadowExample();
	constExample();
	temporalDeadZoneExample();
	simpleLoopExample();
	callbackLoopVarExample();
	callbackLoopNamedFunctionExample();
	callbackLoopLetExample();
	parameterExample([2, 3, 16]);
})();

//# sourceMappingURL=block-scoping-babel.js.map