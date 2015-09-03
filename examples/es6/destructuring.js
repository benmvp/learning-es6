(function() {
	'use strict';

	{
		// object pattern matching
		let {lName, fName} = {fName: 'John', age: 15, lName: 'Doe'};

		// array pattern matching
		let [first, second, third] = [8, 4, 100, -5, 20];

		// output: Doe, John
		console.log(lName + ', '+ fName);

		// output: 100, 4, 8
		console.log(third, second, first);
	};

	{
		let config = {delay: 500, title: 'Hi!', info: {name: 'Elijah'}},

			// full & shorthand syntax can be mixed
			// `delay` uses shorthand syntax
			{info: {name: one}, delay, empty: three, title: four} = config;

		// output: 'Elijah', 500, undefined, 'Hi!'
		// missing properties have `undefined` value
		console.log(one, delay, three, four);
	};

	{
		const bKey = 'b';

		/*** computed values work too! ***/
		let {[bKey]: b, a, c} = {a: 1, b: 2, c: 3};

		// outputs: 1, 2, 3
		console.log(a, b, c);


		/*** destructuring works w/o variable declarations ***/
		b = {};
		( {a, b: b.count} = {a: 1, b: 2} );

		// output: 1, {count: 2}
		console.log(a, b);
	};

	{
		// nested array literal pattern syntax
		let myArray = [1, ['hello'], true],
			[first, [secondNest], third] = myArray;

		// output: 1, 'hello', true
		console.log(first, secondNest, third);
	};

	{
		// skipping indices in array literal pattern
		let sequence = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34],
			[first, , third, fourth, , , seventh] = sequence
		;

		// output: 0, 1, 2, 8
		console.log(first, third, fourth, seventh);
	};

	{
		let json = {
				shapes: ['circle', 'square', 'triangle'],
				colors: 5,
				fill: true,
				author: {
					firstName: 'Ben',
					lastName: 'Ilegbodu',
					city: 'Pittsburg'
				}
			},
			{
				fill,
				author: {lastName, firstName, city},
				shapes: [, secondShape],
				colors: numColors
			} = json;

		// output: true, square, 5
		console.log(fill, secondShape, numColors);
		// output: Ilegbodu, Ben, Pittsburg
		console.log(lastName, firstName, city);
	};

	{
		// using array destructuring to swap 2 variables
		let a = 1,
			b = 2;

		[b, a] = [a, b];

		// output: 2, 1
		console.log(a, b);
	};

	{
		// destructuring class objects
		let {
				protocol: scheme, 
				host: domain, 
				pathname: path, 
				search: query,
				hash,
				href: url
			} = location;

		// output: true
		console.log(
			(scheme + '//' + domain + path + query + hash) == url
		);
	};

	{
		// destructuring return values
		let [, areaCode, exchange, lineNumber] =
			/^(\d\d\d)-(\d\d\d)-(\d\d\d\d)$/
				.exec('650-555-1234');

		// output: 650, 555, 1234
		console.log(areaCode, exchange, lineNumber);
	};

	{
		// function w/ multiple return values & destructuring
		
		const find = function(list, token) {
			for (let i = 0; i < list.length; i++) {
				if (list[i].indexOf(token) > -1)
					return {index: i, val: list[i]};
			}

			// match not found
			return {index: -1, val: undefined};
		};
		let fruits = ['apple', 'grape', 'peach', 'pear'],
			{index, val} = find(fruits, 'ape');
		console.log(index, val);
	};
}) ();
