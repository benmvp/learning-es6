(function() {
	'use strict';

	function* range(start, count) {
	    for (let delta = 0; delta < count; delta++) {
	        yield start + delta;
	    }
	}

	function* basicGeneratorFunc() {
	    console.log('before yield');
	    yield;
	    console.log('after yield');
	}

	function* awesomeGeneratorFunc() {
		console.log('start');

		console.log('first yield');
		yield 'Generators';

		console.log('second yield');
		yield 'are';

		console.log('third yield');
		yield 'awesome!';

		console.log('all done!');

		return 1000;
	}

	function* delegatedGeneratorFunc(start) {
	    // yield the first item in the generator
	    yield 'before';

	    // delegate yielding to `awesomeGeneratorFunc()` which will add
	    // 3 more items
	    yield* awesomeGeneratorFunc();

	    // yield 7th item
	    yield 'between';

	    // delegate yielding to `range()` which will add 5 items
	    // we can pass parameters/variables just like regular functions
	    // without `yield*` we'd just get back a new range generator
	    // with only `yield`, the generator would be added as 10th item
	    yield* range(start, 5);

	    // yield 11th and final item
	    yield 'after';
	}

	function* iterableGeneratorFunc() {
		yield 'adios';
		yield* 'hello'; // a string is an iterable!
		yield 'au revoir';
	}

	function* delegatedGeneratorFuncV2() {
		// we're still including the 3 items yielded by awesomeGeneratorFunc(),
		// but we're also saving the return value in a variable
		let start = yield* awesomeGeneratorFunc();

		// we can now use that variable to initialize range()
		yield* range(start, 3);
	}

	for (let teenageYear of range(13, 7)) {
	    console.log(`Teenage angst @ ${teenageYear}!`);
	}

	let basicGenerator = basicGeneratorFunc();

	// nothing has happened yet, just have a generator

	// output:
	// before yield
	// {value: undefined, done: false}
	console.log(basicGenerator.next());

	// this will be executed before 'after yield'
	// is written to the log
	console.log('after first next');

	// Output:
	// after yield
	// {value: undefined, done: true}
	console.log(basicGenerator.next());

	// additional calls to .next() do nothing

	// Output:
	// {value: undefined, done: false}
	console.log(basicGenerator.next());

	console.log('===== MANUAL CONSUMPTION =====');
	let awesomeGeneratorObj = awesomeGeneratorFunc();

	// output:
	// start
	// first yield
	// {value: 'Generators', done: false}
	console.log(awesomeGeneratorObj.next());

	// output:
	// second yield
	// {value: 'are', done: false}
	console.log(awesomeGeneratorObj.next());

	// output:
	// third yield
	// {value: 'awesome!', done: false}
	console.log(awesomeGeneratorObj.next());

	// output:
	// all done!
	// {value: 1000, done: true}
	console.log(awesomeGeneratorObj.next());

	// output:
	// {value: undefined, done: true}
	console.log(awesomeGeneratorObj.next());

	// output:
	// {value: undefined, done: true}
	console.log(awesomeGeneratorObj.next());

	console.log('===== FOR-OF CONSUMPTION =====');

	// output:
	// start
	// first yield
	// Generators
	// second yield
	// are
	// third yield
	// awesome!
	// all done!
	for (let word of awesomeGeneratorFunc()) {
		console.log(`value: "${word}"`);
	}

	console.log('===== DESTRUCTURING CONSUMPTION =====');

	// output:
	// start
	// first yield
	// second yield
	let [firstValue, secondValue] = awesomeGeneratorFunc();

	// output: 'Generators'
	console.log(firstValue);

	// output: 'are'
	console.log(secondValue);

	console.log('===== SPREAD OPERATOR CONSUMPTION =====');

	let generatedArray = [...awesomeGeneratorFunc()];

	// output:
	// start
	// first yield
	// second yield
	// third yield
	// all done!
	// ['Generators', 'are', 'awesome!']
	console.log(generatedArray);

	// quickly see contents of generator by converting to an array
	// output:
	// ['before', 1, 2, 3, 4, 5, 'between', 'Generators', 'area', 'awesome', 'after']
	console.log([...delegatedGeneratorFunc(1)]);

	// quickly see contents of generator by converting to an array
	// output: ['adios', 'H', 'e', 'l', 'l', 'o', 'au revoir']
	console.log([...iterableGeneratorFunc()]);

	// output: ['Generators', 'are', 'awesome', 1000, 1001, 1002]
	console.log([...delegatedGeneratorFuncV2()]);

	class BinaryTree {
		constructor(value, left, right) {
			this.value = value;
			this.left = left;
			this.right = right;
		}
		// default `@@iterator` is a generator function so
	    // it needs the `*`
		*[Symbol.iterator]() {
			if (this.left) {
				yield* this.left;
			}

			// Let's do infix/in-order iteration
			yield this.value;

			if (this.right) {
				yield* this.right;
			}
		}
	}

	let tree = new BinaryTree(4,
		new BinaryTree(2,
			new BinaryTree(1),
			new BinaryTree(3)),
		new BinaryTree(5));

	// output: [1, 2, 3, 4, 5]
	console.log([...tree]);

	// Enumerable class that wraps an iterator exposing methods
	// to lazily transform the items
	class Enumerable {
	    constructor(iterator) {
	        this._iterator = iterator;
	    }

	    *[Symbol.iterator]() {
	        yield* this._iterator;
	    }

	    // Static (and private) helper generator functions
	    static *_filter(iterator, predicate) {
	        for (let value of iterator) {
	            if (predicate(value)) {
	                yield value;
	            }
	        }
	    }
	    static *_map(iterator, mapperFunc) {
	        for (let value of iterator) {
	            yield mapperFunc(value);
	        }
	    }
	    static *_take(iterator, count) {
	        let index = -1;
	        for (let value of iterator) {
	            if (++index >= count) {
	                break;
	            }

	            yield value;
	        }
	    }

	    // Instance methods wrapping functional helpers which allow for chaining
	    // They essentially act as iterator transformers
	    filter(predicate) {
	        this._iterator = Enumerable._filter(this._iterator, predicate);
	        return this;
	    }
	    map(mapper) {
	        this._iterator = Enumerable._map(this._iterator, mapper);
	        return this;
	    }
	    take(count) {
	        this._iterator = Enumerable._take(this._iterator, count);
	        return this;
	    }
	}

	function generateStocks() {
	    // Returns an infinite generator that keeps on returning new stocks
	    function* _generate() {
	        for (let stockNo = 1; ; stockNo++) {
	            let stockInfo = {
	                name: `Stock #${stockNo}`,
	                price: +(Math.random() * 100).toFixed(2)
	            };

	            console.log('Generated stock info', stockInfo);

	            yield stockInfo;
	        }
	    }

	    return new Enumerable(_generate());
	}

	let enumerable = generateStocks()
	    .filter(stockInfo => stockInfo.price > 30)
	    .map(stockInfo => `${stockInfo.name} ($${stockInfo.price})`)
	    .take(5);

	// Even though `_generate()` is an infinite generator, it's also lazy so
	// we only look at enough stocks that are > 30 until we get 5 of them
	console.log([...enumerable]);
}) ();
