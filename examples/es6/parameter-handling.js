(function() {
	'use strict';

	{ // default parameter examples
		{ // simple use case
			let getData = function(data, useCache=true) {
				if (useCache) {
					console.log('using cache for', data);
				}
				else {
					console.log('not using cache', data);
				}
			};

			getData();

			// `useCache` is missing and is `undefined`.
			// therefore `useCache `defaults to `true`
			getData({q:'churches+in+Pittsburg'});

			// `undefined` also triggers default value.
			// therefore `useCache` defaults to `true`
			getData({q:'bbq+in+Nashville'}, undefined);

			// when value is passed, default is no longer
			// triggered. therefore `useCache` is `true`
			getData({q:'conferences+in+California'}, true);

			// value is specified, default is no longer
			// triggered. therefore `useCache` is `false`
			getData({q:'Houston+Rockets'}, false);
		}

		{ // non-primitive values as defaults
			let
				getWidth = function() {
					console.log('getWidth called');
					return 7;
				},
				drawRect = function(
					width=getWidth(),
					height=width * 2,
					options={color:'red'}
				) {
					console.log(width, height, options);
				};

			// `getWidth` is called to retrieve default
			// value for `width` since it was unspecified.
			// output:
			//   getWidth called
			//   7, 14, {color:'red'}
			drawRect();

			// `getWidth` is not called because `width` is
			// specified. `height` is still defaulted to
			// 2x `width`.
			// output:
			//    17, 34, {color:'red'}
			drawRect(17);

			// `height` is no longer defaulted to 2x `width`
			// but options are still defaulted.
			// ouput:
			//    4, 11, {color:'red'}
			drawRect(4, 11);

			// nothing is defaulted
			// output:
			//    7,5, 11, {color:'blue'}
			drawRect(7.5, 11, {color:'blue'});
		}

		{ // default params in any order
			let drawCube = function(x, y=7, z) {
				console.log('cube', x, y, z);
			};

			// `y` is defaulted, but `x` & `z` are not
			// so they are `undefined`.
			// output: cube, undefined, y, undefined
			drawCube();

			// `y` is still defaulted, but `z` isn't.
			// output: cube, 2.5, 7, undefined
			drawCube(2.5);

			// output: cube, 9, 15, undefined
			drawCube(9, 15);

			// output: cube, 4, 1.7, 18
			drawCube(4, 1.7, 18);

			// `y` is once again defaulted
			// output: cube, 11, 7, 8.8
			drawCube(11, undefined, 8.8);

			// `null` does not trigger `y` to default
			// output: cube, 14, null, 72
			drawCube(14, null, 72);
		}

		{ // arrow functions w/ default values
			// 2nd parameter is `undefined`, triggers
			// default of 100.
			// output: 2, 200, 10
			console.log(
				[1, undefined, 5].map(
					(x=100) => x * 2
				)
			);
		}
	}

	{ // rest parameters examples

		{ // simple example
			let join = function(separator, ...values) {
				return values.join(separator);
			};

			// all of the parameters after the first
			// are gathered together into `values`
			// which is a true `Array`
			// output: "one//two//three"
			console.log(join('//', 'one', 'two', 'three'));
		}

		{ // enforcing max arity

			let maxA = function (...values) {
				// only want as many a 3 parameters
				// so throw error if over
				if (values.length > 3)
					throw Error('max 3 parameters allowed!');

				// use destructuring to get values
				// into variables
				let [a, b, c] = values;

				return Math.max(a, b, c);
			};

			// not an error
			// output 3
			console.log(maxA(1, 2, 3));

			// error!
			//console.log(maxA(1, 2, 3, 4));

			let maxB = function(a, b, c, ...shouldBeEmpty) {
				if (shouldBeEmpty.length > 0)
					throw Error('max 3 parameters allowed!');

				return Math.max(a, b, c);
			};

			// not an error
			// output 6
			console.log(maxB(4, 5, 6));

			// error!
			//console.log(maxB(4, 5, 6, 7));
		}
	}

	{ // spread operator examples
		{ // simple example
			let volume = function(width, length, height) {
				return width * length * height;
			};

			// the apply method on functions takes an
			// array and maps it to the parmeters of
			// the function.
			// ouput: 176.596 (5.3 * 4.9 * 6.8)
			console.log(volume.apply(undefined, [5.3, 4.9, 6.8]));

			// the array values are separated into
			// separate parameters
			// output: 80 (2 * 8 * 5)
			console.log(volume(...[2, 8, 5]));
		}

		{ // spread with additional parameters
			let merge = function(...objects) {
				let masterObj = {};

				// iterate over `objects` merging each
				// into `masterObj` to generate flattened
				// object
				for (let i = 0; i < objects.length; i++) {
					let obj = objects[i];;
					for (let key in obj)
						masterObj[key] = obj[key];
				}

				return masterObj;
			};

			let objectsList = [
				{
					count: 5,
					delay: 2000,
					early: true,
					message: 'Hello'
				},
				{
					early: false
				}
			];

			let merged = merge(
				{count: 10},
				...objectsList,
				{delay: 1500}
			);

			// output:
			// {count:5, delay:1500, early:false, message:'Hello'}
			console.log(merged);
		}

		{ // spread + arrays
			// replace need for calling `splice`
			let list = [9, 8, 7, 6, 5],
				[first, second, ...rest] = list;

			// output: [7, 6, 5], 8, 9
			console.log(rest, second, first);


			// replace need for calling `concat`
			// output: [11, 10, 9, 8, 7, 6, 5]
			console.log([11, 10, ...list]);
		}
	}

	{ // destructuring parameters example
		let ajax = function(url, {method='GET', delay=1000, callback}={}) {
			// `method`, `delay` & `callback` are
			// destructured variables.
			// default {} is used to allow
			// object to be unspecified w/o
			// causing an error.
			// default values w/in destructure pattern
			console.log(url, method, delay);
			setTimeout(
				() => callback('DONE!'),
				delay
			);
		};

		// the second parameter to the function
		// is an object whose properties are
		// destructured to individual variables
		// simulating named parameters
		ajax(
			'http://api.eventbrite.com/get',
			{
				delay: 2000,
				method: 'POST',
				callback: function(message) {
					console.log(message);
				}
			}
		);
	}
}) ();
