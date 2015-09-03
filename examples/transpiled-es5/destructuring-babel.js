'use strict';

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

(function () {
	'use strict';

	{
		// object pattern matching
		var _fName$age$lName = { fName: 'John', age: 15, lName: 'Doe' };
		var lName = _fName$age$lName.lName;
		var fName = _fName$age$lName.fName;

		// array pattern matching
		var _ref = [8, 4, 100, -5, 20];
		var first = _ref[0];
		var second = _ref[1];
		var third = _ref[2];

		// output: Doe, John
		console.log(lName + ', ' + fName);

		// output: 100, 4, 8
		console.log(third, second, first);
	};

	{
		var config = { delay: 500, title: 'Hi!', info: { name: 'Elijah' } };

		var one = config.info.name;
		var delay = config.delay;
		var three = config.empty;
		var four = config.title;

		// output: 'Elijah', 500, undefined, 'Hi!'
		// missing properties have `undefined` value
		console.log(one, delay, three, four);
	};

	{
		var bKey = 'b';

		/*** computed values work too! ***/
		var _a$b$c = { a: 1, b: 2, c: 3 };
		var b = _a$b$c[bKey];
		var a = _a$b$c.a;
		var c = _a$b$c.c;

		// outputs: 1, 2, 3
		console.log(a, b, c);

		/*** destructuring works w/o variable declarations ***/
		b = {};

		// output: 1, {count: 2}
		var _a$b = { a: 1, b: 2 };
		a = _a$b.a;
		b.count = _a$b.b;
		console.log(a, b);
	};

	{
		// nested array literal pattern syntax
		var myArray = [1, ['hello'], true];
		var first = myArray[0];

		var _myArray$1 = _slicedToArray(myArray[1], 1);

		var secondNest = _myArray$1[0];
		var third = myArray[2];

		// output: 1, 'hello', true
		console.log(first, secondNest, third);
	};

	{
		// skipping indices in array literal pattern
		var sequence = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34];
		var first = sequence[0];
		var third = sequence[2];
		var fourth = sequence[3];
		var seventh = sequence[6];

		// output: 0, 1, 2, 8
		console.log(first, third, fourth, seventh);
	};

	{
		var json = {
			shapes: ['circle', 'square', 'triangle'],
			colors: 5,
			fill: true,
			author: {
				firstName: 'Ben',
				lastName: 'Ilegbodu',
				city: 'Pittsburg'
			}
		};
		var fill = json.fill;
		var _json$author = json.author;
		var lastName = _json$author.lastName;
		var firstName = _json$author.firstName;
		var city = _json$author.city;

		var _json$shapes = _slicedToArray(json.shapes, 2);

		var secondShape = _json$shapes[1];
		var numColors = json.colors;

		// output: true, square, 5
		console.log(fill, secondShape, numColors);
		// output: Ilegbodu, Ben, Pittsburg
		console.log(lastName, firstName, city);
	};

	{
		// using array destructuring to swap 2 variables
		var a = 1,
		    b = 2;

		// output: 2, 1
		var _ref2 = [a, b];
		b = _ref2[0];
		a = _ref2[1];
		console.log(a, b);
	};

	{
		// destructuring class objects
		var scheme = location.protocol;
		var domain = location.host;
		var path = location.pathname;
		var query = location.search;
		var hash = location.hash;
		var url = location.href;

		// output: true
		console.log(scheme + '//' + domain + path + query + hash == url);
	};

	{
		// destructuring return values

		var _dDDDDDDDDD$$exec = /^(\d\d\d)-(\d\d\d)-(\d\d\d\d)$/.exec('650-555-1234');

		var _dDDDDDDDDD$$exec2 = _slicedToArray(_dDDDDDDDDD$$exec, 4);

		var areaCode = _dDDDDDDDDD$$exec2[1];
		var exchange = _dDDDDDDDDD$$exec2[2];
		var lineNumber = _dDDDDDDDDD$$exec2[3];

		// output: 650, 555, 1234
		console.log(areaCode, exchange, lineNumber);
	};

	{
		// function w/ multiple return values & destructuring

		var _find = function _find(list, token) {
			for (var i = 0; i < list.length; i++) {
				if (list[i].indexOf(token) > -1) return { index: i, val: list[i] };
			}

			// match not found
			return { index: -1, val: undefined };
		};
		var fruits = ['apple', 'grape', 'peach', 'pear'];

		var _find2 = _find(fruits, 'ape');

		var index = _find2.index;
		var val = _find2.val;

		console.log(index, val);
	};
})();
// full & shorthand syntax can be mixed
// `delay` uses shorthand syntax

//# sourceMappingURL=destructuring-babel.js.map