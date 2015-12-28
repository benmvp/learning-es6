(function() {
  'use strict';
  var $__18,
      $__19;
  var $__2;
  function isIterable(obj) {
    return obj && typeof obj[Symbol.iterator] === 'function';
  }
  function take(iterable, count) {
    var $__2;
    var iterator = iterable[Symbol.iterator]();
    return ($__2 = {}, Object.defineProperty($__2, "next", {
      value: function() {
        if (count > 0) {
          count--;
          return iterator.next();
        } else {
          return {done: true};
        }
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__2, Symbol.iterator, {
      value: function() {
        return this;
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), $__2);
  }
  var values = ['alpha', 'beta', 'charlie'];
  var defaultIterator = values[Symbol.iterator]();
  console.log(defaultIterator.next());
  console.log(defaultIterator.next());
  console.log(defaultIterator.next());
  console.log(defaultIterator.next());
  console.log(isIterable(values));
  console.log(isIterable('Ben'));
  console.log(isIterable(new Set()));
  var MyIterator = function() {
    var $__2;
    function MyIterator() {
      this.step = 0;
    }
    return ($traceurRuntime.createClass)(MyIterator, ($__2 = {}, Object.defineProperty($__2, Symbol.iterator, {
      value: function() {
        return this;
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__2, "next", {
      value: function() {
        this.step++;
        if (this.step === 1)
          return {value: 'Ben'};
        else if (this.step == 2)
          return {value: 'Ilegbodu'};
        return {done: true};
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), $__2), {});
  }();
  var iter = new MyIterator();
  console.log(iter.next());
  console.log(iter.next());
  console.log(iter.next());
  console.log(iter.next());
  var myIter2 = new MyIterator();
  var $__6 = true;
  var $__7 = false;
  var $__8 = undefined;
  try {
    for (var $__4 = void 0,
        $__3 = (myIter2)[Symbol.iterator](); !($__6 = ($__4 = $__3.next()).done); $__6 = true) {
      var item = $__4.value;
      {
        console.log(item);
      }
    }
  } catch ($__9) {
    $__7 = true;
    $__8 = $__9;
  } finally {
    try {
      if (!$__6 && $__3.return != null) {
        $__3.return();
      }
    } finally {
      if ($__7) {
        throw $__8;
      }
    }
  }
  var fibonacci = ($__2 = {}, Object.defineProperty($__2, Symbol.iterator, {
    value: function() {
      var previous = 0,
          current = 1;
      return {next: function() {
          var $__17,
              $__18,
              $__19;
          ($__17 = [current, previous + current], previous = ($__18 = $__17[Symbol.iterator](), ($__19 = $__18.next()).done ? void 0 : $__19.value), current = ($__19 = $__18.next()).done ? void 0 : $__19.value, $__17);
          return {value: current};
        }};
    },
    configurable: true,
    enumerable: true,
    writable: true
  }), $__2);
  var $__13 = true;
  var $__14 = false;
  var $__15 = undefined;
  try {
    for (var $__11 = void 0,
        $__10 = (fibonacci)[Symbol.iterator](); !($__13 = ($__11 = $__10.next()).done); $__13 = true) {
      var number = $__11.value;
      {
        if (number > 1000)
          break;
        console.log(number);
      }
    }
  } catch ($__16) {
    $__14 = true;
    $__15 = $__16;
  } finally {
    try {
      if (!$__13 && $__10.return != null) {
        $__10.return();
      }
    } finally {
      if ($__14) {
        throw $__15;
      }
    }
  }
  var $__17 = fibonacci,
      secondFib = ($__18 = $__17[Symbol.iterator](), $__18.next(), ($__19 = $__18.next()).done ? void 0 : $__19.value),
      fourthFib = ($__18.next(), ($__19 = $__18.next()).done ? void 0 : $__19.value);
  console.log(secondFib, fourthFib);
  console.log(Array.from(take(fibonacci, 6)));
})();
//# sourceMappingURL=iterators-iterables-traceur.js.map
