(function() {
  'use strict';
  function wait(delay) {
    return new Promise(function(resolve, reject) {
      setTimeout(resolve, delay);
    });
  }
  function fetch(url) {
    return new Promise(function(resolve, reject) {
      var request = new XMLHttpRequest();
      request.open('GET', url);
      request.onload = function() {
        if (req.status == 200) {
          resolve(request.responseText);
        } else {
          reject(new Error('request failed!'));
        }
      };
      request.send();
    });
  }
  function fetchAll() {
    for (var urls = [],
        $__1 = 0; $__1 < arguments.length; $__1++)
      urls[$__1] = arguments[$__1];
    return Promise.all(urls.map(fetch));
  }
  function timeout(delay) {
    return wait(delay).then(function() {
      throw new Error('Timed out!');
    });
  }
  function fetchWithTimeout(url, delay) {
    return Promise.race([fetch(url), timeout(delay)]);
  }
  wait(3000).then(function() {
    console.log('3 seconds have passed!');
    return wait(2000);
  }).then(function() {
    console.log('5 seconds have passed!');
    x++;
  }).catch(function(error) {
    console.log(error);
  }).then(function() {
    console.log('clean up');
  });
  fetch('/json/action-movies.json').then(function(response) {
    var data = JSON.parse(response);
    console.log('main data', data);
    return fetch(data.url);
  }).then(function(response) {
    console.log('inner data', response);
  }).catch(function(e) {
    console.error(e);
  });
  Promise.resolve('sin').then(function(problem) {
    console.log(problem);
  });
  console.log('this executes before the fulfillment');
  Promise.reject(new Error('Pride!')).catch(function(e) {
    console.error(e);
  });
  console.log('this executes before the rejection');
  var fetchPromise = fetch('/json/scary-movies.json');
  console.log(Promise.resolve(fetchPromise) == fetchPromise);
  console.log(Promise.reject(fetchPromise) == fetchPromise);
  Promise.resolve({then: function(resolve, reject) {
      resolve('Ben');
    }}).then(function(name) {
    console.log({name: name});
  });
  var $fetch = function(url) {
    return Promise.resolve($.get(url));
  };
  $fetch('/json/romantic-movies.json').then(function(response) {
    console.log('response', response);
  });
  Promise.resolve('Ben').then(function(firstName) {
    console.log(firstName);
    return firstName + ' A.';
  }).then(function(firstAndMiddle) {
    console.log(firstAndMiddle);
    return firstAndMiddle + ' Ilegbodu';
  }).then(function(fullName) {
    console.log(fullName);
  });
  Promise.resolve().then(function() {
    throw new Error('oh no!');
  }).catch(function(e) {
    console.error(e);
    throw new Error('again?!?!');
  }).catch(function(e) {
    console.error(e);
  });
  fetch('/json/bad-data.json').catch(function() {
    return JSON.stringify({name: 'Ben Ilegbodu'});
  }).then(function(response) {
    console.log(response);
  });
  Promise.reject(new Error('FAIL!')).then(function() {}).then(function() {}).catch(function(e) {
    console.error(e);
  });
  fetchAll('/json/funny-movies.json', '/json/action-movies.json', '/json/scary-movies.json', '/json/romantic-movies.json', '/json/sad-movies.json').then(function(responses) {
    console.log(responses.length);
  }).catch(function(e) {
    console.error('one or more of the requests failed!', e);
  });
  fetchWithTimeout('/json/sad-movies.json', 5).then(function(response) {
    console.log('successful response', response);
  }).catch(function(e) {
    console.error('request error', e);
  });
})();
//# sourceMappingURL=promises-traceur.js.map
