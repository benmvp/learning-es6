(function() {
  'use strict';
  var log = function(message) {
    return console.log(message);
  };
  log('Testing out arrow functions!');
  log([1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(function(value) {
    return value * value;
  }));
  var descendingSortFunc = function(a, b) {
    return b - a;
  },
      values = [2, 7, 5, 6],
      sortedValues = values.sort(descendingSortFunc);
  log(values);
  log(sortedValues);
  log([4, 6, 2].map(function(x) {}));
  log([4, 5, 1].map(function(x) {
    foo: x;
  }));
  log([4, 5, 1].map(function(x) {
    return ({});
  }));
  log([4, 5, 1].map(function(x) {
    return ({foo: x});
  }));
  (function(message) {
    for (var charNo = 0; charNo < message.length; charNo++) {
      log(message.charAt(charNo));
    }
  })('hello');
  var car = {
    speed: 0,
    accelerate: function() {
      var $__1 = this;
      this.accelerator = setInterval(function() {
        $__1.speed++;
        log($__1.speed);
      }, 100);
    },
    cruise: function() {
      clearInterval(this.accelerator);
      log('cruising at ' + this.speed + ' mph');
    }
  };
  car.accelerate();
  setTimeout(function() {
    return car.cruise();
  }, 5000);
  log($traceurRuntime.typeof(function() {}));
  log($traceurRuntime.typeof((function() {})));
  log(function() {} instanceof Function);
  log((function() {}) instanceof Function);
  function generateArrowFunctionReturningLexicalArguments() {
    var $__1 = arguments;
    return function() {
      return $__1;
    };
  }
  var arrowFunction = generateArrowFunctionReturningLexicalArguments(5, 'foo', [5, 4, 3]);
  log(arrowFunction());
})();
//# sourceMappingURL=arrow-functions-traceur.js.map
