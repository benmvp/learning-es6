'use strict';

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

(function () {
	'use strict';

	function isIterable(obj) {
		return obj && typeof obj[Symbol.iterator] === 'function';
	}

	function take(iterable, count) {
		// get default `@@iterator` from original iterable
		var iterator = iterable[Symbol.iterator]();

		// return new (anonymous) iterable
		return _defineProperty({
			next: function next() {
				// implementing `next()` makes it an iterator

				if (count > 0) {
					// if there are items remaining, return the next
					// one from the iterable
					count--;

					// return the value from original iterable's iterator.
					// if there are less values in it than `count`, this
					// will just return `{done: true}` early!
					return iterator.next();
				} else {
					// otherwise just say we're done
					return { done: true };
				}
			}
		}, Symbol.iterator, function () {
			// implementing default `@@iterator` makes it an iterable
			return this;
		});
	}

	var values = ['alpha', 'beta', 'charlie'];
	var defaultIterator = values[Symbol.iterator]();

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

	var MyIterator = (function () {
		function MyIterator() {
			_classCallCheck(this, MyIterator);

			this.step = 0;
		}

		_createClass(MyIterator, [{
			key: Symbol.iterator,
			value: function value() {
				return this;
			}
		}, {
			key: 'next',
			value: function next() {
				this.step++;

				if (this.step === 1) return { value: 'Ben' };else if (this.step == 2) return { value: 'Ilegbodu' };

				return { done: true };
			}
		}]);

		return MyIterator;
	})();

	var iter = new MyIterator();

	// output: {value: 'Ben'}
	console.log(iter.next());

	// output: {value: 'Ilegbodu'}
	console.log(iter.next());

	// output: {done: true}
	console.log(iter.next());

	// output: {done: true}
	console.log(iter.next());

	var myIter2 = new MyIterator();

	var _iteratorNormalCompletion = true;
	var _didIteratorError = false;
	var _iteratorError = undefined;

	try {
		for (var _iterator = myIter2[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
			var item = _step.value;

			console.log(item);
		}
	} catch (err) {
		_didIteratorError = true;
		_iteratorError = err;
	} finally {
		try {
			if (!_iteratorNormalCompletion && _iterator['return']) {
				_iterator['return']();
			}
		} finally {
			if (_didIteratorError) {
				throw _iteratorError;
			}
		}
	}

	var fibonacci = _defineProperty({}, Symbol.iterator, function () {
		var previous = 0,
		    current = 1;
		return {
			next: function next() {
				var _ref2 = [current, previous + current];
				previous = _ref2[0];
				current = _ref2[1];

				return { value: current };
			}
		};
	});

	// iterables with `for-of` loop
	var _iteratorNormalCompletion2 = true;
	var _didIteratorError2 = false;
	var _iteratorError2 = undefined;

	try {
		for (var _iterator2 = fibonacci[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
			var number = _step2.value;

			// stop after the number is greater than 1000
			if (number > 1000) break;

			console.log(number);
		}

		// iterables w/ destructuring
	} catch (err) {
		_didIteratorError2 = true;
		_iteratorError2 = err;
	} finally {
		try {
			if (!_iteratorNormalCompletion2 && _iterator2['return']) {
				_iterator2['return']();
			}
		} finally {
			if (_didIteratorError2) {
				throw _iteratorError2;
			}
		}
	}

	var _fibonacci2 = _slicedToArray(fibonacci, 4);

	var secondFib = _fibonacci2[1];
	var fourthFib = _fibonacci2[3];

	// output: 2, 5
	console.log(secondFib, fourthFib);

	// output: [1, 2, 3, 5, 8, 13]
	console.log(Array.from(take(fibonacci, 6)));
})();

//# sourceMappingURL=iterators-iterables-babel.js.map