'use strict';

(function () {
	'use strict';

	// Creating a promise wrapper for setTimeout
	function wait(delay) {
		return new Promise(function (resolve, reject) {
			setTimeout(resolve, delay);
		});
	}

	// Create a promise wrapper for XHR request
	function fetch(url) {
		// return a Promise object
		return new Promise(function (resolve, reject) {
			var request = new XMLHttpRequest();

			request.open('GET', url);

			request.onload = function () {
				if (req.status == 200) {
					// fulfill the promise
					resolve(request.responseText);
				} else {
					// reject the promise
					reject(new Error('request failed!'));
				}
			};

			request.send();
		});
	}

	// Return a promise that is only fulfilled once
	// all of the url fetch requests are fulfilled
	// via Promise.all
	function fetchAll() {
		for (var _len = arguments.length, urls = Array(_len), _key = 0; _key < _len; _key++) {
			urls[_key] = arguments[_key];
		}

		// Use rest parameter to aggregate URLs
		// into an array

		return Promise.all(
		// map the array of urls into an array
		// of `fetch` promises
		urls.map(fetch));
	}

	// Extend the promise-based `wait` by throwing
	// an Error if the delay is successful
	function timeout(delay) {
		return wait(delay).then(function () {
			throw new Error('Timed out!');
		});
	}

	// Return a promise that will be fulfilled if
	// the fetch is fulfilled before the timeout
	// is rejected.
	function fetchWithTimeout(url, delay) {
		// construct an array to pass to `Promise.race`
		return Promise.race([fetch(url), timeout(delay)]);
	}

	// Using a promise
	wait(3000).then(function () {
		console.log('3 seconds have passed!');
		return wait(2000);
	}).then(function () {
		console.log('5 seconds have passed!');
		x++; // ReferenceError triggers `catch`
	})['catch'](function (error) {
		// output: ReferenceError
		console.log(error);
	}).then(function () {
		// simulate `finally` clause
		console.log('clean up');
	});

	fetch('/json/action-movies.json').then(function (response) {
		var data = JSON.parse(response);

		console.log('main data', data);

		return fetch(data.url);
	}).then(function (response) {
		console.log('inner data', response);
	})['catch'](function (e) {
		// catching all failures!
		console.error(e);
	});

	// Promise.resolve() creates a promise
	// that is "immediately" settled & fulfilled.
	// You can optionally pass a value.
	Promise.resolve('sin').then(function (problem) {
		// output: sin
		console.log(problem);
	});

	// Even though the promise is "immediately"
	// fulfilled, all promises are required to
	// be asynchronous. Therefore the fulfillment
	// reaction is added to the execution queue
	// and the following line executes first.
	console.log('this executes before the fulfillment');

	// Promise.reject() creates a promise that
	// is "immediately" settled & rejected. You
	// should pass an `Error` object.
	Promise.reject(new Error('Pride!'))['catch'](function (e) {
		console.error(e);
	});

	// Similarly, because promises *must* be
	// asynchronous, this line will execute first
	console.log('this executes before the rejection');

	var fetchPromise = fetch('/json/scary-movies.json');

	// Fulfilling or rejecting an already existing
	// promise does nothing. It's just returned
	// output: true
	console.log(Promise.resolve(fetchPromise) == fetchPromise);
	console.log(Promise.reject(fetchPromise) == fetchPromise);

	// Resolving a `thenable` returns a `Promise`
	// on which you can add `then()` or `catch()`
	// reactions
	Promise.resolve({
		// A `thenable` is an object that
		// has a Promise-style `then` method.
		// Using method definition shorthand!
		then: function then(resolve, reject) {
			resolve('Ben');
		}
	}).then(function (name) {
		// using property value shorthand!
		// ouput: {name: 'Ben'}
		console.log({ name: name });
	});

	// Create a native Promise wrapper of the
	// jQuery.get() method that returns a jQuery-style
	// promise which is a `thenable`
	var $fetch = function $fetch(url) {
		return Promise.resolve($.get(url));
	};

	$fetch('/json/romantic-movies.json').then(function (response) {
		console.log('response', response);
	});

	// Create immediately fulfilled promise
	// that returns 'Ben'
	Promise.resolve('Ben').then(function (firstName) {
		// output: Ben
		console.log(firstName);

		return firstName + ' A.';
	}).then(function (firstAndMiddle) {
		// output: Ben A.
		console.log(firstAndMiddle);

		return firstAndMiddle + ' Ilegbodu';
	}).then(function (fullName) {
		// output: Ben A. Ilegbodu
		console.log(fullName);
	});

	// Create immediately fulfilled, but
	// empty promise
	Promise.resolve().then(function () {
		// throw an `Error` which should be
		// caught by `catch()`
		throw new Error('oh no!');
	})['catch'](function (e) {
		// ouput: 'oh no!' error with call
		// stack info
		console.error(e);

		// throw another `Error` within this
		// error handler, which can be caught
		// by a follow-up error handler
		throw new Error('again?!?!');
	})['catch'](function (e) {
		// output: 'again?!?!' error
		console.error(e);
	});

	fetch('/json/bad-data.json')['catch'](function () {
		// There was an error retrieving data
		// so just return default data
		return JSON.stringify({ name: 'Ben Ilegbodu' });
	}).then(function (response) {
		// at this point we should always have
		// valid data regardless of if the `fetch`
		// was successful
		// output: {name: 'Ben Ilegbodu'}
		console.log(response);
	});

	// Create immediately erjected and empty
	// promise
	Promise.reject(new Error('FAIL!')).then(function () {
		// because the promise is rejected,
		// this fulfillment reaction is never called
	}).then(function () {
		// neither is this one
	})['catch'](function (e) {
		// instead this reject reaction is called
		// to handle the rejection that happened further
		// up the chain
		// output: 'FAIL!' error
		console.error(e);
	});

	// Make an XHR request for each URL and
	// process the results once they've *all*
	// completed
	fetchAll('/json/funny-movies.json', '/json/action-movies.json', '/json/scary-movies.json', '/json/romantic-movies.json', '/json/sad-movies.json').then(function (responses) {
		// `responses` is the array of response
		// data

		// output: 5
		console.log(responses.length);

		// more processing of results
	})['catch'](function (e) {
		// one or of the requests failed or
		// there was an error in `then()`
		console.error('one or more of the requests failed!', e);
	});

	// Make an XHR request for the URL that has to
	// return a response *before* the 5 ms timeout
	// happens
	fetchWithTimeout('/json/sad-movies.json', 5).then(function (response) {
		// successful response before the 5 ms timeout
		console.log('successful response', response);
	})['catch'](function (e) {
		// Either the timeout occurred or some other error.
		// Would need to check the method or use a custom
		// `Error` subclass in `timeout`
		console.error('request error', e);
	});
})();

//# sourceMappingURL=promises-babel.js.map