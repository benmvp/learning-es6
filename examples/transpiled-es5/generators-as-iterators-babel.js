'use strict';

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

(function () {
	'use strict';

	var marked1$0 = [range, basicGeneratorFunc, awesomeGeneratorFunc, delegatedGeneratorFunc, iterableGeneratorFunc, delegatedGeneratorFuncV2].map(regeneratorRuntime.mark);
	function range(start, count) {
		var delta;
		return regeneratorRuntime.wrap(function range$(context$2$0) {
			while (1) switch (context$2$0.prev = context$2$0.next) {
				case 0:
					delta = 0;

				case 1:
					if (!(delta < count)) {
						context$2$0.next = 7;
						break;
					}

					context$2$0.next = 4;
					return start + delta;

				case 4:
					delta++;
					context$2$0.next = 1;
					break;

				case 7:
				case 'end':
					return context$2$0.stop();
			}
		}, marked1$0[0], this);
	}

	function basicGeneratorFunc() {
		return regeneratorRuntime.wrap(function basicGeneratorFunc$(context$2$0) {
			while (1) switch (context$2$0.prev = context$2$0.next) {
				case 0:
					console.log('before yield');
					context$2$0.next = 3;
					return;

				case 3:
					console.log('after yield');

				case 4:
				case 'end':
					return context$2$0.stop();
			}
		}, marked1$0[1], this);
	}

	function awesomeGeneratorFunc() {
		return regeneratorRuntime.wrap(function awesomeGeneratorFunc$(context$2$0) {
			while (1) switch (context$2$0.prev = context$2$0.next) {
				case 0:
					console.log('start');

					console.log('first yield');
					context$2$0.next = 4;
					return 'Generators';

				case 4:

					console.log('second yield');
					context$2$0.next = 7;
					return 'are';

				case 7:

					console.log('third yield');
					context$2$0.next = 10;
					return 'awesome!';

				case 10:

					console.log('all done!');

					return context$2$0.abrupt('return', 1000);

				case 12:
				case 'end':
					return context$2$0.stop();
			}
		}, marked1$0[2], this);
	}

	function delegatedGeneratorFunc(start) {
		return regeneratorRuntime.wrap(function delegatedGeneratorFunc$(context$2$0) {
			while (1) switch (context$2$0.prev = context$2$0.next) {
				case 0:
					context$2$0.next = 2;
					return 'before';

				case 2:
					return context$2$0.delegateYield(awesomeGeneratorFunc(), 't0', 3);

				case 3:
					context$2$0.next = 5;
					return 'between';

				case 5:
					return context$2$0.delegateYield(range(start, 5), 't1', 6);

				case 6:
					context$2$0.next = 8;
					return 'after';

				case 8:
				case 'end':
					return context$2$0.stop();
			}
		}, marked1$0[3], this);
	}

	function iterableGeneratorFunc() {
		return regeneratorRuntime.wrap(function iterableGeneratorFunc$(context$2$0) {
			while (1) switch (context$2$0.prev = context$2$0.next) {
				case 0:
					context$2$0.next = 2;
					return 'adios';

				case 2:
					return context$2$0.delegateYield('hello', 't0', 3);

				case 3:
					context$2$0.next = 5;
					return 'au revoir';

				case 5:
				case 'end':
					return context$2$0.stop();
			}
		}, marked1$0[4], this);
	}

	function delegatedGeneratorFuncV2() {
		var start;
		return regeneratorRuntime.wrap(function delegatedGeneratorFuncV2$(context$2$0) {
			while (1) switch (context$2$0.prev = context$2$0.next) {
				case 0:
					return context$2$0.delegateYield(awesomeGeneratorFunc(), 't0', 1);

				case 1:
					start = context$2$0.t0;
					return context$2$0.delegateYield(range(start, 3), 't1', 3);

				case 3:
				case 'end':
					return context$2$0.stop();
			}
		}, marked1$0[5], this);
	}

	var _iteratorNormalCompletion = true;
	var _didIteratorError = false;
	var _iteratorError = undefined;

	try {
		for (var _iterator = range(13, 7)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
			var teenageYear = _step.value;

			console.log('Teenage angst @ ' + teenageYear + '!');
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

	var basicGenerator = basicGeneratorFunc();

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
	var awesomeGeneratorObj = awesomeGeneratorFunc();

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
	var _iteratorNormalCompletion2 = true;
	var _didIteratorError2 = false;
	var _iteratorError2 = undefined;

	try {
		for (var _iterator2 = awesomeGeneratorFunc()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
			var word = _step2.value;

			console.log('value: "' + word + '"');
		}
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

	console.log('===== DESTRUCTURING CONSUMPTION =====');

	// output:
	// start
	// first yield
	// second yield

	var _awesomeGeneratorFunc = awesomeGeneratorFunc();

	var _awesomeGeneratorFunc2 = _slicedToArray(_awesomeGeneratorFunc, 2);

	var firstValue = _awesomeGeneratorFunc2[0];
	var secondValue = _awesomeGeneratorFunc2[1];

	// output: 'Generators'
	console.log(firstValue);

	// output: 'are'
	console.log(secondValue);

	console.log('===== SPREAD OPERATOR CONSUMPTION =====');

	var generatedArray = [].concat(_toConsumableArray(awesomeGeneratorFunc()));

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
	console.log([].concat(_toConsumableArray(delegatedGeneratorFunc(1))));

	// quickly see contents of generator by converting to an array
	// output: ['adios', 'H', 'e', 'l', 'l', 'o', 'au revoir']
	console.log([].concat(_toConsumableArray(iterableGeneratorFunc())));

	// output: ['Generators', 'are', 'awesome', 1000, 1001, 1002]
	console.log([].concat(_toConsumableArray(delegatedGeneratorFuncV2())));

	var BinaryTree = (function () {
		function BinaryTree(value, left, right) {
			_classCallCheck(this, BinaryTree);

			this.value = value;
			this.left = left;
			this.right = right;
		}

		// default `@@iterator` is a generator function so
		// it needs the `*`

		_createClass(BinaryTree, [{
			key: Symbol.iterator,
			value: regeneratorRuntime.mark(function value() {
				return regeneratorRuntime.wrap(function value$(context$3$0) {
					while (1) switch (context$3$0.prev = context$3$0.next) {
						case 0:
							if (!this.left) {
								context$3$0.next = 2;
								break;
							}

							return context$3$0.delegateYield(this.left, 't0', 2);

						case 2:
							context$3$0.next = 4;
							return this.value;

						case 4:
							if (!this.right) {
								context$3$0.next = 6;
								break;
							}

							return context$3$0.delegateYield(this.right, 't1', 6);

						case 6:
						case 'end':
							return context$3$0.stop();
					}
				}, value, this);
			})
		}]);

		return BinaryTree;
	})();

	var tree = new BinaryTree(4, new BinaryTree(2, new BinaryTree(1), new BinaryTree(3)), new BinaryTree(5));

	// output: [1, 2, 3, 4, 5]
	console.log([].concat(_toConsumableArray(tree)));

	// Enumerable class that wraps an iterator exposing methods
	// to lazily transform the items

	var Enumerable = (function () {
		function Enumerable(iterator) {
			_classCallCheck(this, Enumerable);

			this._iterator = iterator;
		}

		_createClass(Enumerable, [{
			key: Symbol.iterator,
			value: regeneratorRuntime.mark(function value() {
				return regeneratorRuntime.wrap(function value$(context$3$0) {
					while (1) switch (context$3$0.prev = context$3$0.next) {
						case 0:
							return context$3$0.delegateYield(this._iterator, 't0', 1);

						case 1:
						case 'end':
							return context$3$0.stop();
					}
				}, value, this);
			})

			// Static (and private) helper generator functions
		}, {
			key: 'filter',

			// Instance methods wrapping functional helpers which allow for chaining
			// They essentially act as iterator transformers
			value: function filter(predicate) {
				this._iterator = Enumerable._filter(this._iterator, predicate);
				return this;
			}
		}, {
			key: 'map',
			value: function map(mapper) {
				this._iterator = Enumerable._map(this._iterator, mapper);
				return this;
			}
		}, {
			key: 'take',
			value: function take(count) {
				this._iterator = Enumerable._take(this._iterator, count);
				return this;
			}
		}], [{
			key: '_filter',
			value: regeneratorRuntime.mark(function _filter(iterator, predicate) {
				var _iteratorNormalCompletion3, _didIteratorError3, _iteratorError3, _iterator3, _step3, value;

				return regeneratorRuntime.wrap(function _filter$(context$3$0) {
					while (1) switch (context$3$0.prev = context$3$0.next) {
						case 0:
							_iteratorNormalCompletion3 = true;
							_didIteratorError3 = false;
							_iteratorError3 = undefined;
							context$3$0.prev = 3;
							_iterator3 = iterator[Symbol.iterator]();

						case 5:
							if (_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done) {
								context$3$0.next = 13;
								break;
							}

							value = _step3.value;

							if (!predicate(value)) {
								context$3$0.next = 10;
								break;
							}

							context$3$0.next = 10;
							return value;

						case 10:
							_iteratorNormalCompletion3 = true;
							context$3$0.next = 5;
							break;

						case 13:
							context$3$0.next = 19;
							break;

						case 15:
							context$3$0.prev = 15;
							context$3$0.t0 = context$3$0['catch'](3);
							_didIteratorError3 = true;
							_iteratorError3 = context$3$0.t0;

						case 19:
							context$3$0.prev = 19;
							context$3$0.prev = 20;

							if (!_iteratorNormalCompletion3 && _iterator3['return']) {
								_iterator3['return']();
							}

						case 22:
							context$3$0.prev = 22;

							if (!_didIteratorError3) {
								context$3$0.next = 25;
								break;
							}

							throw _iteratorError3;

						case 25:
							return context$3$0.finish(22);

						case 26:
							return context$3$0.finish(19);

						case 27:
						case 'end':
							return context$3$0.stop();
					}
				}, _filter, this, [[3, 15, 19, 27], [20,, 22, 26]]);
			})
		}, {
			key: '_map',
			value: regeneratorRuntime.mark(function _map(iterator, mapperFunc) {
				var _iteratorNormalCompletion4, _didIteratorError4, _iteratorError4, _iterator4, _step4, value;

				return regeneratorRuntime.wrap(function _map$(context$3$0) {
					while (1) switch (context$3$0.prev = context$3$0.next) {
						case 0:
							_iteratorNormalCompletion4 = true;
							_didIteratorError4 = false;
							_iteratorError4 = undefined;
							context$3$0.prev = 3;
							_iterator4 = iterator[Symbol.iterator]();

						case 5:
							if (_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done) {
								context$3$0.next = 12;
								break;
							}

							value = _step4.value;
							context$3$0.next = 9;
							return mapperFunc(value);

						case 9:
							_iteratorNormalCompletion4 = true;
							context$3$0.next = 5;
							break;

						case 12:
							context$3$0.next = 18;
							break;

						case 14:
							context$3$0.prev = 14;
							context$3$0.t0 = context$3$0['catch'](3);
							_didIteratorError4 = true;
							_iteratorError4 = context$3$0.t0;

						case 18:
							context$3$0.prev = 18;
							context$3$0.prev = 19;

							if (!_iteratorNormalCompletion4 && _iterator4['return']) {
								_iterator4['return']();
							}

						case 21:
							context$3$0.prev = 21;

							if (!_didIteratorError4) {
								context$3$0.next = 24;
								break;
							}

							throw _iteratorError4;

						case 24:
							return context$3$0.finish(21);

						case 25:
							return context$3$0.finish(18);

						case 26:
						case 'end':
							return context$3$0.stop();
					}
				}, _map, this, [[3, 14, 18, 26], [19,, 21, 25]]);
			})
		}, {
			key: '_take',
			value: regeneratorRuntime.mark(function _take(iterator, count) {
				var index, _iteratorNormalCompletion5, _didIteratorError5, _iteratorError5, _iterator5, _step5, value;

				return regeneratorRuntime.wrap(function _take$(context$3$0) {
					while (1) switch (context$3$0.prev = context$3$0.next) {
						case 0:
							index = -1;
							_iteratorNormalCompletion5 = true;
							_didIteratorError5 = false;
							_iteratorError5 = undefined;
							context$3$0.prev = 4;
							_iterator5 = iterator[Symbol.iterator]();

						case 6:
							if (_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done) {
								context$3$0.next = 15;
								break;
							}

							value = _step5.value;

							if (!(++index >= count)) {
								context$3$0.next = 10;
								break;
							}

							return context$3$0.abrupt('break', 15);

						case 10:
							context$3$0.next = 12;
							return value;

						case 12:
							_iteratorNormalCompletion5 = true;
							context$3$0.next = 6;
							break;

						case 15:
							context$3$0.next = 21;
							break;

						case 17:
							context$3$0.prev = 17;
							context$3$0.t0 = context$3$0['catch'](4);
							_didIteratorError5 = true;
							_iteratorError5 = context$3$0.t0;

						case 21:
							context$3$0.prev = 21;
							context$3$0.prev = 22;

							if (!_iteratorNormalCompletion5 && _iterator5['return']) {
								_iterator5['return']();
							}

						case 24:
							context$3$0.prev = 24;

							if (!_didIteratorError5) {
								context$3$0.next = 27;
								break;
							}

							throw _iteratorError5;

						case 27:
							return context$3$0.finish(24);

						case 28:
							return context$3$0.finish(21);

						case 29:
						case 'end':
							return context$3$0.stop();
					}
				}, _take, this, [[4, 17, 21, 29], [22,, 24, 28]]);
			})
		}]);

		return Enumerable;
	})();

	function generateStocks() {
		var marked2$0 = [_generate].map(regeneratorRuntime.mark);

		// Returns an infinite generator that keeps on returning new stocks
		function _generate() {
			var stockNo, stockInfo;
			return regeneratorRuntime.wrap(function _generate$(context$3$0) {
				while (1) switch (context$3$0.prev = context$3$0.next) {
					case 0:
						stockNo = 1;

					case 1:
						stockInfo = {
							name: 'Stock #' + stockNo,
							price: +(Math.random() * 100).toFixed(2)
						};

						console.log('Generated stock info', stockInfo);

						context$3$0.next = 5;
						return stockInfo;

					case 5:
						stockNo++;
						context$3$0.next = 1;
						break;

					case 8:
					case 'end':
						return context$3$0.stop();
				}
			}, marked2$0[0], this);
		}

		return new Enumerable(_generate());
	}

	var enumerable = generateStocks().filter(function (stockInfo) {
		return stockInfo.price > 30;
	}).map(function (stockInfo) {
		return stockInfo.name + ' ($' + stockInfo.price + ')';
	}).take(5);

	// Even though `_generate()` is an infinite generator, it's also lazy so
	// we only look at enough stocks that are > 30 until we get 5 of them
	console.log([].concat(_toConsumableArray(enumerable)));
})();

// yield the first item in the generator

// delegate yielding to `awesomeGeneratorFunc()` which will add
// 3 more items

// yield 7th item

// delegate yielding to `range()` which will add 5 items
// we can pass parameters/variables just like regular functions
// without `yield*` we'd just get back a new range generator
// with only `yield`, the generator would be added as 10th item

// yield 11th and final item
// a string is an iterable!

// we're still including the 3 items yielded by awesomeGeneratorFunc(),
// but we're also saving the return value in a variable

// we can now use that variable to initialize range()

// Let's do infix/in-order iteration

//# sourceMappingURL=generators-babel.js.map