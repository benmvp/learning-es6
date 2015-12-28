(function() {
	'use strict';

	function isIterable(obj) {
		return obj && typeof obj[Symbol.iterator] === 'function';
	}

	function take(iterable, count) {
	    // get default `@@iterator` from original iterable
	    let iterator = iterable[Symbol.iterator]();

	    // return new (anonymous) iterable
	    return {
	        next() {
	            // implementing `next()` makes it an iterator

	            if (count > 0) {
	                // if there are items remaining, return the next
	                // one from the iterable
	                count--;


					// return the value from original iterable's iterator.
					// if there are less values in it than `count`, this
					// will just return `{done: true}` early!
	                return iterator.next();
	            }
	            else {
	                // otherwise just say we're done
	                return {done: true};
	            }
	        },
	        [Symbol.iterator]() {
	            // implementing default `@@iterator` makes it an iterable
	            return this;
	        }
	    };
	}

	let values = ['alpha', 'beta', 'charlie'];
	let defaultIterator = values[Symbol.iterator]();

	// output: {value: 'alpha', done: false}
	console.log(defaultIterator.next());

	// output: {value: 'beta', done: false}
	console.log(defaultIterator.next());

	// output: {value: 'charlie', done: false}
	console.log(defaultIterator.next());

	// output: {value: undefined, done: true}
	console.log(defaultIterator.next());

	// output: true
	console.log(isIterable(values));

	// output: true
	console.log(isIterable('Ben'));

	// output: true
	console.log(isIterable(new Set()));

	class MyIterator {
	    constructor() {
	        this.step = 0;
	    }
	    [Symbol.iterator]() {
	        return this;
	    }
	    next() {
	        this.step++;

	        if (this.step === 1)
	            return {value: 'Ben'};
	        else if (this.step == 2)
	            return {value: 'Ilegbodu'};

	        return {done: true};
	    }
	}

	let iter = new MyIterator();

	// output: {value: 'Ben'}
	console.log(iter.next());

	// output: {value: 'Ilegbodu'}
	console.log(iter.next());

	// output: {done: true}
	console.log(iter.next());

	// output: {done: true}
	console.log(iter.next());

	let myIter2 = new MyIterator();

	for (let item of myIter2) {
	    console.log(item);
	}

	let fibonacci = {
	    [Symbol.iterator]() {
	        let previous = 0, current = 1;
	        return {
	            next() {
	                [previous, current] = [current, previous + current];
	                return {value: current};
	            }
	        }
	    }
	}

	// iterables with `for-of` loop
	for (var number of fibonacci) {
	    // stop after the number is greater than 1000
	    if (number > 1000)
	        break;

	    console.log(number);
	}

	// iterables w/ destructuring
	let [, secondFib, , fourthFib] = fibonacci;

	// output: 2, 5
	console.log(secondFib, fourthFib);

	// output: [1, 2, 3, 5, 8, 13]
	console.log(Array.from(take(fibonacci, 6)));
}) ();
