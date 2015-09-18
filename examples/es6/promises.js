(function() {
	'use strict';

	// Creating a promise wrapper for setTimeout
	function wait(delay) {
	    return new Promise((resolve, reject) => {
	        setTimeout(resolve, delay);
	    });
	}

	// Create a promise wrapper for XHR request
	function fetch(url) {
		// return a Promise object
		return new Promise((resolve, reject) => {
			var request = new XMLHttpRequest();

			request.open('GET', url);

			request.onload = function() {
				if (request.status == 200) {
					// fulfill the promise
					resolve(request.responseText);
				}
				else {
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
	function fetchAll(...urls) {
		// Use rest parameter to aggregate URLs
		// into an array

		return Promise.all(
			// map the array of urls into an array
			// of `fetch` promises
			urls.map(fetch)
		);
	}

	// Extend the promise-based `wait` by throwing
	// an Error if the delay is successful
	function timeout(delay) {
		return wait(delay).then(() => {
			throw new Error('Timed out!');
		});
	}

	// Return a promise that will be fulfilled if
	// the fetch is fulfilled before the timeout
	// is rejected.
	function fetchWithTimeout(url, delay) {
		// construct an array to pass to `Promise.race`
		return Promise.race([
			fetch(url),
			timeout(delay)
		]);
	}

	// Using a promise
	wait(3000).then(() => {
	    console.log('3 seconds have passed!');
	    return wait(2000);
	}).then(() => {
		console.log('5 seconds have passed!');
		x++; // ReferenceError triggers `catch`
	}).catch(error => {
		// output: ReferenceError
		console.log(error);
	}).then(() => {
		// simulate `finally` clause
		console.log('clean up');
	});

	fetch('/learning-es6/json/action-movies.json').then(response => {
		var data = JSON.parse(response);

		console.log('main data', data);

		return fetch(data.url || 'learning-es6/json/romantic-movies.json');
	}).then(response => {
		console.log('inner data', response);
	}).catch(e => {
		// catching all failures!
		console.error(e);
	});

	// Promise.resolve() creates a promise
	// that is "immediately" settled & fulfilled.
	// You can optionally pass a value.
	Promise.resolve('sin').then(problem => {
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
	Promise.reject(new Error('Pride!')).catch(e => {
		console.error(e);
	});

	// Similarly, because promises *must* be
	// asynchronous, this line will execute first
	console.log('this executes before the rejection');

	var fetchPromise = fetch('/learning-es6/json/scary-movies.json');

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
		then(resolve, reject) {
			resolve('Ben');
		}
	}).then(name => {
		// using property value shorthand!
		// ouput: {name: 'Ben'}
		console.log({name});
	});

	// Create a native Promise wrapper of the
	// jQuery.get() method that returns a jQuery-style
	// promise which is a `thenable`
	var $fetch = function(url) {
		return Promise.resolve($.get(url));
	};

	$fetch('/learning-es6/json/romantic-movies.json').then(response => {
		console.log('response', response);
	});

	// Create immediately fulfilled promise
	// that returns 'Ben'
	Promise.resolve('Ben').then(firstName => {
		// output: Ben
		console.log(firstName);

		return firstName + ' A.';
	}).then(firstAndMiddle => {
		// output: Ben A.
		console.log(firstAndMiddle);

		return firstAndMiddle + ' Ilegbodu';
	}).then(fullName => {
		// output: Ben A. Ilegbodu
		console.log(fullName);
	});

	// Create immediately fulfilled, but
	// empty promise
	Promise.resolve().then(() => {
		// throw an `Error` which should be
		// caught by `catch()`
		throw new Error('oh no!');
	}).catch(e => {
		// ouput: 'oh no!' error with call
		// stack info
		console.error(e);

		// throw another `Error` within this
		// error handler, which can be caught
		// by a follow-up error handler
		throw new Error('again?!?!');
	}).catch(e => {
		// output: 'again?!?!' error
		console.error(e);
	});

	fetch('/learning-es6/json/bad-data.json').catch(() => {
		// There was an error retrieving data
		// so just return default data
		return JSON.stringify({name: 'Ben Ilegbodu'});
	}).then(response => {
		// at this point we should always have
		// valid data regardless of if the `fetch`
		// was successful
		// output: {name: 'Ben Ilegbodu'}
		console.log(response);
	});

	// Create immediately rejected and empty
	// promise
	Promise.reject(new Error('FAIL!')).then(() => {
		// because the promise is rejected,
		// this fulfillment reaction is never called
	}).then(() => {
		// neither is this one
	}).catch(e => {
		// instead this reject reaction is called
		// to handle the rejection that happened further
		// up the chain
		// output: 'FAIL!' error
		console.error(e);
	});

	// Make an XHR request for each URL and
	// process the results once they've *all*
	// completed
	fetchAll(
		'/learning-es6/json/funny-movies.json',
		'/learning-es6/json/action-movies.json',
		'/learning-es6/json/scary-movies.json',
		'/learning-es6/json/romantic-movies.json',
		'/learning-es6/json/sad-movies.json'
	).then(responses => {
		// `responses` is the array of response
		// data

		// output: 5
		console.log(responses.length);
		console.log(responses);

		// more processing of results
	}).catch(e => {
		// one or of the requests failed or
		// there was an error in `then()`
		console.error('one or more of the requests failed!', e);
	});

	// Make an XHR request for the URL that has to
	// return a response *before* the 5 ms timeout
	// happens
	fetchWithTimeout('/learning-es6/json/sad-movies.json', 5).then(response => {
		// successful response before the 5 ms timeout
		console.log('successful response', response)
	}).catch(e => {
		// Either the timeout occurred or some other error.
		// Would need to check the method or use a custom
		// `Error` subclass in `timeout`
		console.error('request error', e);
	});
}) ();
