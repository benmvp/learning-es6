'use strict';

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

(function () {
	'use strict';

	var Player = function Player(name) {
		_classCallCheck(this, Player);

		this.name = name;
	};

	{
		var _iteratorNormalCompletion;

		var _didIteratorError;

		var _iteratorError;

		var _iterator, _step;

		var _iteratorNormalCompletion2;

		var _didIteratorError2;

		var _iteratorError2;

		var _iterator2, _step2;

		var _iteratorNormalCompletion3;

		var _didIteratorError3;

		var _iteratorError3;

		var _iterator3, _step3;

		var _iteratorNormalCompletion4;

		var _didIteratorError4;

		var _iteratorError4;

		var _iterator4, _step4;

		(function () {
			// Map
			var steph = new Player('Stephen Curry');
			var kobe = new Player('Kobe Bryant');
			var lebron = new Player('LeBron James');
			var allStarVotes = new Map();

			allStarVotes.set(steph, 50).set(kobe, 0).set(lebron, 22);

			// make a clone of allstarVotes
			var allStarVotesCopy = new Map(allStarVotes);

			// output: 50
			console.log(allStarVotes.get(steph));

			// output: false
			console.log(allStarVotes.has('Kevin Durant'));

			allStarVotes['delete'](kobe);

			// output: 2
			console.log(allStarVotes.size);

			allStarVotes.clear();

			// output: 2
			console.log(allStarVotes.size);

			// log each player name since player
			// is a key in the map
			_iteratorNormalCompletion = true;
			_didIteratorError = false;
			_iteratorError = undefined;

			try {
				for (_iterator = allStarVotesCopy.keys()[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
					var player = _step.value;

					console.log(player.name);
				}

				// log each all star vote count since
				// count is a value in the map
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

			_iteratorNormalCompletion2 = true;
			_didIteratorError2 = false;
			_iteratorError2 = undefined;

			try {
				for (_iterator2 = allStarVotesCopy.values()[Symbol.iterator](); !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
					var count = _step2.value;

					console.log(count);
				}

				// log each player name and his votes count
				// Uses array destructuring to assign [key, value]
				// pair into separate variables'
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

			_iteratorNormalCompletion3 = true;
			_didIteratorError3 = false;
			_iteratorError3 = undefined;

			try {
				for (_iterator3 = allStarVotesCopy.entries()[Symbol.iterator](); !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
					var _step3$value = _slicedToArray(_step3.value, 2);

					var player = _step3$value[0];
					var count = _step3$value[1];

					console.log(player.name + ' (' + count + ')');
				}

				// log each player name and his votes count
				// together. Ex: 'Stephen Curry (50)
				// Uses array destructuring to assign [key, value]
				// pair into separate variables
			} catch (err) {
				_didIteratorError3 = true;
				_iteratorError3 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion3 && _iterator3['return']) {
						_iterator3['return']();
					}
				} finally {
					if (_didIteratorError3) {
						throw _iteratorError3;
					}
				}
			}

			_iteratorNormalCompletion4 = true;
			_didIteratorError4 = false;
			_iteratorError4 = undefined;

			try {
				for (_iterator4 = allStarVotes[Symbol.iterator](); !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
					var _step4$value = _slicedToArray(_step4.value, 2);

					var player = _step4$value[0];
					var count = _step4$value[1];

					console.log(player.name + ' (' + count + ')');
				}

				// functional verion of calling `.entries()`
				// `map` is a reference to `allStarVotes`
			} catch (err) {
				_didIteratorError4 = true;
				_iteratorError4 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion4 && _iterator4['return']) {
						_iterator4['return']();
					}
				} finally {
					if (_didIteratorError4) {
						throw _iteratorError4;
					}
				}
			}

			allStarVotesCopy.forEach(function (count, player, map) {
				console.log(player.name + ' (' + count + ')');
				console.log(map === allStarVotesCopy);
			});

			var durant = new Player('Kevin Durant');
			var cp3 = new Player('Chris Paul');
			var theBrow = new Player('Anthony Davis');

			var russell = new Player('Russell Westbrook');
			var carmelo = new Player('Carmelo Anthony');

			var moreAllStarVotes = new Map([[durant, 20], [cp3, 5], [theBrow, 10]]);
			var rawData = [[russell, 12], [carmelo, 15]];

			var mergedMap = new Map([].concat(_toConsumableArray(allStarVotesCopy), _toConsumableArray(moreAllStarVotes), rawData));

			console.log(mergedMap);
		})();
	}

	{
		(function () {
			// WeakMap
			var steph = new Player('Stephen Curry');
			var kobe = new Player('Kobe Bryant');
			var lebron = new Player('LeBron James');
			var allStarVotesWeak = new WeakMap();

			allStarVotesWeak.set(steph, 50).set(kobe, 0).set(lebron, 22);

			// output: 50
			console.log(allStarVotesWeak.get(steph));

			// output: false
			console.log(allStarVotesWeak.has('Kevin Durant'));

			allStarVotesWeak['delete'](kobe);

			// set up metadata click map
			var clickMap = new WeakMap();

			// on each click, add the div to the map
			// (with initial click) or increment its
			// click count
			$('p').click(function () {
				var pNode = this;
				var clicks = clickMap.get(pNode);

				if (!clicks) {
					clicks = 0;
				}

				clicks.set(pNode, ++clicks);
			});
		})();
	}

	{
		(function () {
			// Set

			var union = function union(setA, setB) {
				return new Set([].concat(_toConsumableArray(setA), _toConsumableArray(setB)));
			};

			var intersection = function intersection(setA, setB) {
				return new Set([].concat(_toConsumableArray(setA)).filter(function (item) {
					return setB.has(item);
				}));
			};

			var difference = function difference(setA, setB) {
				return new Set([].concat(_toConsumableArray(setA)).filter(function (item) {
					return !setB.has(item);
				}));
			};

			var steph = new Player('Stephen Curry');
			var kobe = new Player('Kobe Bryant');
			var lebron = new Player('LeBron James');

			var allStars = new Set();

			allStars.add(steph).add(kobe).add(steph) // duplicates are removed
			.add(lebron);

			// create a clone by passing set as constructor of another
			var allStarsClone = new Set(allStars);

			// output: false
			console.log(allStars.has('Kevin Durant'));

			// output: true
			console.log(allStars.has(kobe));

			allStars['delete'](kobe);

			// output: 2
			console.log(allStars.size);

			allStars.clear();

			// output: 2
			console.log(allStars.size);

			// easily iterate over a set using `for-of`
			for (var allStar in allStarsClone) {
				console.log(allStar.name);
			}

			// can also iterate using `.forEach()`
			allStarsClone.forEach(function (value, key, setRef) {
				console.log(value.name);

				// In a set the value & key are the same
				console.log(value === key);

				// The third parameter is a reference to the
				// instance
				console.log(setRef === allStarsClone);
			});

			var setUnion = union(new Set(['a', 'b', 'c', 'd']), new Set(['d', 'e', 'f', 'g']));

			// output: 8
			console.log(setUnion.size);

			var setIntersection = intersection(new Set(['a', 'b', 'c', 'd']), new Set(['d', 'e', 'f', 'g']));

			// output: 1
			console.log(setIntersection.size);

			var setDifference = difference(new Set(['a', 'b', 'c', 'd']), new Set(['d', 'e', 'f', 'g']));

			// output: 3
			console.log(setDifference.size);
		})();
	}
})();

//# sourceMappingURL=new-collections-babel.js.map