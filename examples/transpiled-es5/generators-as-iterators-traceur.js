(function() {
  'use strict';
  var $__28 = $traceurRuntime.initGeneratorFunction(range),
      $__29 = $traceurRuntime.initGeneratorFunction(basicGeneratorFunc),
      $__30 = $traceurRuntime.initGeneratorFunction(awesomeGeneratorFunc),
      $__31 = $traceurRuntime.initGeneratorFunction(delegatedGeneratorFunc),
      $__36 = $traceurRuntime.initGeneratorFunction(iterableGeneratorFunc),
      $__39 = $traceurRuntime.initGeneratorFunction(delegatedGeneratorFuncV2);
  var $__26,
      $__27;
  function range(start, count) {
    var delta;
    return $traceurRuntime.createGeneratorInstance(function($ctx) {
      while (true)
        switch ($ctx.state) {
          case 0:
            delta = 0;
            $ctx.state = 7;
            break;
          case 7:
            $ctx.state = (delta < count) ? 1 : -2;
            break;
          case 4:
            delta++;
            $ctx.state = 7;
            break;
          case 1:
            $ctx.state = 2;
            return start + delta;
          case 2:
            $ctx.maybeThrow();
            $ctx.state = 4;
            break;
          default:
            return $ctx.end();
        }
    }, $__28, this);
  }
  function basicGeneratorFunc() {
    return $traceurRuntime.createGeneratorInstance(function($ctx) {
      while (true)
        switch ($ctx.state) {
          case 0:
            console.log('before yield');
            $ctx.state = 6;
            break;
          case 6:
            $ctx.state = 2;
            return;
          case 2:
            $ctx.maybeThrow();
            $ctx.state = 4;
            break;
          case 4:
            console.log('after yield');
            $ctx.state = -2;
            break;
          default:
            return $ctx.end();
        }
    }, $__29, this);
  }
  function awesomeGeneratorFunc() {
    return $traceurRuntime.createGeneratorInstance(function($ctx) {
      while (true)
        switch ($ctx.state) {
          case 0:
            console.log('start');
            console.log('first yield');
            $ctx.state = 16;
            break;
          case 16:
            $ctx.state = 2;
            return 'Generators';
          case 2:
            $ctx.maybeThrow();
            $ctx.state = 4;
            break;
          case 4:
            console.log('second yield');
            $ctx.state = 18;
            break;
          case 18:
            $ctx.state = 6;
            return 'are';
          case 6:
            $ctx.maybeThrow();
            $ctx.state = 8;
            break;
          case 8:
            console.log('third yield');
            $ctx.state = 20;
            break;
          case 20:
            $ctx.state = 10;
            return 'awesome!';
          case 10:
            $ctx.maybeThrow();
            $ctx.state = 12;
            break;
          case 12:
            console.log('all done!');
            $ctx.state = 22;
            break;
          case 22:
            $ctx.returnValue = 1000;
            $ctx.state = -2;
            break;
          default:
            return $ctx.end();
        }
    }, $__30, this);
  }
  function delegatedGeneratorFunc(start) {
    var $__32,
        $__33,
        $__34,
        $__35;
    return $traceurRuntime.createGeneratorInstance(function($ctx) {
      while (true)
        switch ($ctx.state) {
          case 0:
            $ctx.state = 2;
            return 'before';
          case 2:
            $ctx.maybeThrow();
            $ctx.state = 4;
            break;
          case 4:
            $__32 = $ctx.wrapYieldStar(awesomeGeneratorFunc()[Symbol.iterator]());
            $ctx.sent = void 0;
            $ctx.action = 'next';
            $ctx.state = 16;
            break;
          case 16:
            $__33 = $__32[$ctx.action]($ctx.sentIgnoreThrow);
            $ctx.state = 13;
            break;
          case 13:
            $ctx.state = ($__33.done) ? 7 : 6;
            break;
          case 7:
            $ctx.sent = $__33.value;
            $ctx.state = 14;
            break;
          case 6:
            $ctx.state = 16;
            return $__33.value;
          case 14:
            $ctx.state = 18;
            return 'between';
          case 18:
            $ctx.maybeThrow();
            $ctx.state = 20;
            break;
          case 20:
            $__34 = $ctx.wrapYieldStar(range(start, 5)[Symbol.iterator]());
            $ctx.sent = void 0;
            $ctx.action = 'next';
            $ctx.state = 32;
            break;
          case 32:
            $__35 = $__34[$ctx.action]($ctx.sentIgnoreThrow);
            $ctx.state = 29;
            break;
          case 29:
            $ctx.state = ($__35.done) ? 23 : 22;
            break;
          case 23:
            $ctx.sent = $__35.value;
            $ctx.state = 30;
            break;
          case 22:
            $ctx.state = 32;
            return $__35.value;
          case 30:
            $ctx.state = 34;
            return 'after';
          case 34:
            $ctx.maybeThrow();
            $ctx.state = -2;
            break;
          default:
            return $ctx.end();
        }
    }, $__31, this);
  }
  function iterableGeneratorFunc() {
    var $__37,
        $__38;
    return $traceurRuntime.createGeneratorInstance(function($ctx) {
      while (true)
        switch ($ctx.state) {
          case 0:
            $ctx.state = 2;
            return 'adios';
          case 2:
            $ctx.maybeThrow();
            $ctx.state = 4;
            break;
          case 4:
            $__37 = $ctx.wrapYieldStar('hello'[Symbol.iterator]());
            $ctx.sent = void 0;
            $ctx.action = 'next';
            $ctx.state = 16;
            break;
          case 16:
            $__38 = $__37[$ctx.action]($ctx.sentIgnoreThrow);
            $ctx.state = 13;
            break;
          case 13:
            $ctx.state = ($__38.done) ? 7 : 6;
            break;
          case 7:
            $ctx.sent = $__38.value;
            $ctx.state = 14;
            break;
          case 6:
            $ctx.state = 16;
            return $__38.value;
          case 14:
            $ctx.state = 18;
            return 'au revoir';
          case 18:
            $ctx.maybeThrow();
            $ctx.state = -2;
            break;
          default:
            return $ctx.end();
        }
    }, $__36, this);
  }
  function delegatedGeneratorFuncV2() {
    var start,
        $__40,
        $__41,
        $__42,
        $__43;
    return $traceurRuntime.createGeneratorInstance(function($ctx) {
      while (true)
        switch ($ctx.state) {
          case 0:
            $__40 = $ctx.wrapYieldStar(awesomeGeneratorFunc()[Symbol.iterator]());
            $ctx.sent = void 0;
            $ctx.action = 'next';
            $ctx.state = 12;
            break;
          case 12:
            $__41 = $__40[$ctx.action]($ctx.sentIgnoreThrow);
            $ctx.state = 9;
            break;
          case 9:
            $ctx.state = ($__41.done) ? 3 : 2;
            break;
          case 3:
            $ctx.sent = $__41.value;
            $ctx.state = 10;
            break;
          case 2:
            $ctx.state = 12;
            return $__41.value;
          case 10:
            start = $ctx.sentIgnoreThrow;
            $ctx.state = 14;
            break;
          case 14:
            $__42 = $ctx.wrapYieldStar(range(start, 3)[Symbol.iterator]());
            $ctx.sent = void 0;
            $ctx.action = 'next';
            $ctx.state = 26;
            break;
          case 26:
            $__43 = $__42[$ctx.action]($ctx.sentIgnoreThrow);
            $ctx.state = 23;
            break;
          case 23:
            $ctx.state = ($__43.done) ? 17 : 16;
            break;
          case 17:
            $ctx.sent = $__43.value;
            $ctx.state = -2;
            break;
          case 16:
            $ctx.state = 26;
            return $__43.value;
          default:
            return $ctx.end();
        }
    }, $__39, this);
  }
  var $__7 = true;
  var $__8 = false;
  var $__9 = undefined;
  try {
    for (var $__5 = void 0,
        $__4 = (range(13, 7))[Symbol.iterator](); !($__7 = ($__5 = $__4.next()).done); $__7 = true) {
      var teenageYear = $__5.value;
      {
        console.log(("Teenage angst @ " + teenageYear + "!"));
      }
    }
  } catch ($__10) {
    $__8 = true;
    $__9 = $__10;
  } finally {
    try {
      if (!$__7 && $__4.return != null) {
        $__4.return();
      }
    } finally {
      if ($__8) {
        throw $__9;
      }
    }
  }
  var basicGenerator = basicGeneratorFunc();
  console.log(basicGenerator.next());
  console.log('after first next');
  console.log(basicGenerator.next());
  console.log(basicGenerator.next());
  console.log('===== MANUAL CONSUMPTION =====');
  var awesomeGeneratorObj = awesomeGeneratorFunc();
  console.log(awesomeGeneratorObj.next());
  console.log(awesomeGeneratorObj.next());
  console.log(awesomeGeneratorObj.next());
  console.log(awesomeGeneratorObj.next());
  console.log(awesomeGeneratorObj.next());
  console.log(awesomeGeneratorObj.next());
  console.log('===== FOR-OF CONSUMPTION =====');
  var $__14 = true;
  var $__15 = false;
  var $__16 = undefined;
  try {
    for (var $__12 = void 0,
        $__11 = (awesomeGeneratorFunc())[Symbol.iterator](); !($__14 = ($__12 = $__11.next()).done); $__14 = true) {
      var word = $__12.value;
      {
        console.log(("value: \"" + word + "\""));
      }
    }
  } catch ($__17) {
    $__15 = true;
    $__16 = $__17;
  } finally {
    try {
      if (!$__14 && $__11.return != null) {
        $__11.return();
      }
    } finally {
      if ($__15) {
        throw $__16;
      }
    }
  }
  console.log('===== DESTRUCTURING CONSUMPTION =====');
  var $__25 = awesomeGeneratorFunc(),
      firstValue = ($__26 = $__25[Symbol.iterator](), ($__27 = $__26.next()).done ? void 0 : $__27.value),
      secondValue = ($__27 = $__26.next()).done ? void 0 : $__27.value;
  console.log(firstValue);
  console.log(secondValue);
  console.log('===== SPREAD OPERATOR CONSUMPTION =====');
  var generatedArray = $traceurRuntime.spread(awesomeGeneratorFunc());
  console.log(generatedArray);
  console.log($traceurRuntime.spread(delegatedGeneratorFunc(1)));
  console.log($traceurRuntime.spread(iterableGeneratorFunc()));
  console.log($traceurRuntime.spread(delegatedGeneratorFuncV2()));
  var BinaryTree = function() {
    var $__3;
    function BinaryTree(value, left, right) {
      this.value = value;
      this.left = left;
      this.right = right;
    }
    return ($traceurRuntime.createClass)(BinaryTree, ($__3 = {}, Object.defineProperty($__3, Symbol.iterator, {
      value: $traceurRuntime.initGeneratorFunction(function $__44() {
        var $__45,
            $__46,
            $__47,
            $__48;
        return $traceurRuntime.createGeneratorInstance(function($ctx) {
          while (true)
            switch ($ctx.state) {
              case 0:
                $ctx.state = (this.left) ? 11 : 10;
                break;
              case 11:
                $__45 = $ctx.wrapYieldStar(this.left[Symbol.iterator]());
                $ctx.sent = void 0;
                $ctx.action = 'next';
                $ctx.state = 12;
                break;
              case 12:
                $__46 = $__45[$ctx.action]($ctx.sentIgnoreThrow);
                $ctx.state = 9;
                break;
              case 9:
                $ctx.state = ($__46.done) ? 3 : 2;
                break;
              case 3:
                $ctx.sent = $__46.value;
                $ctx.state = 10;
                break;
              case 2:
                $ctx.state = 12;
                return $__46.value;
              case 10:
                $ctx.state = 15;
                return this.value;
              case 15:
                $ctx.maybeThrow();
                $ctx.state = 17;
                break;
              case 17:
                $ctx.state = (this.right) ? 28 : -2;
                break;
              case 28:
                $__47 = $ctx.wrapYieldStar(this.right[Symbol.iterator]());
                $ctx.sent = void 0;
                $ctx.action = 'next';
                $ctx.state = 29;
                break;
              case 29:
                $__48 = $__47[$ctx.action]($ctx.sentIgnoreThrow);
                $ctx.state = 26;
                break;
              case 26:
                $ctx.state = ($__48.done) ? 20 : 19;
                break;
              case 20:
                $ctx.sent = $__48.value;
                $ctx.state = -2;
                break;
              case 19:
                $ctx.state = 29;
                return $__48.value;
              default:
                return $ctx.end();
            }
        }, $__44, this);
      }),
      configurable: true,
      enumerable: true,
      writable: true
    }), $__3), {});
  }();
  var tree = new BinaryTree(4, new BinaryTree(2, new BinaryTree(1), new BinaryTree(3)), new BinaryTree(5));
  console.log($traceurRuntime.spread(tree));
  var Enumerable = function() {
    var $__3;
    function Enumerable(iterator) {
      this._iterator = iterator;
    }
    return ($traceurRuntime.createClass)(Enumerable, ($__3 = {}, Object.defineProperty($__3, Symbol.iterator, {
      value: $traceurRuntime.initGeneratorFunction(function $__44() {
        var $__49,
            $__50;
        return $traceurRuntime.createGeneratorInstance(function($ctx) {
          while (true)
            switch ($ctx.state) {
              case 0:
                $__49 = $ctx.wrapYieldStar(this._iterator[Symbol.iterator]());
                $ctx.sent = void 0;
                $ctx.action = 'next';
                $ctx.state = 12;
                break;
              case 12:
                $__50 = $__49[$ctx.action]($ctx.sentIgnoreThrow);
                $ctx.state = 9;
                break;
              case 9:
                $ctx.state = ($__50.done) ? 3 : 2;
                break;
              case 3:
                $ctx.sent = $__50.value;
                $ctx.state = -2;
                break;
              case 2:
                $ctx.state = 12;
                return $__50.value;
              default:
                return $ctx.end();
            }
        }, $__44, this);
      }),
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__3, "filter", {
      value: function(predicate) {
        this._iterator = Enumerable._filter(this._iterator, predicate);
        return this;
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__3, "map", {
      value: function(mapper) {
        this._iterator = Enumerable._map(this._iterator, mapper);
        return this;
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__3, "take", {
      value: function(count) {
        this._iterator = Enumerable._take(this._iterator, count);
        return this;
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), $__3), {
      _filter: $traceurRuntime.initGeneratorFunction(function $__51(iterator, predicate) {
        var $__21,
            $__22,
            $__23,
            $__19,
            $__18,
            value,
            $__24;
        return $traceurRuntime.createGeneratorInstance(function($ctx) {
          while (true)
            switch ($ctx.state) {
              case 0:
                $__21 = true;
                $__22 = false;
                $__23 = undefined;
                $ctx.state = 25;
                break;
              case 25:
                $ctx.pushTry(11, 12);
                $ctx.state = 14;
                break;
              case 14:
                $__19 = void 0, $__18 = (iterator)[Symbol.iterator]();
                $ctx.state = 10;
                break;
              case 10:
                $ctx.state = (!($__21 = ($__19 = $__18.next()).done)) ? 6 : 8;
                break;
              case 4:
                $__21 = true;
                $ctx.state = 10;
                break;
              case 6:
                value = $__19.value;
                $ctx.state = 7;
                break;
              case 7:
                $ctx.state = (predicate(value)) ? 1 : 4;
                break;
              case 1:
                $ctx.state = 2;
                return value;
              case 2:
                $ctx.maybeThrow();
                $ctx.state = 4;
                break;
              case 8:
                $ctx.popTry();
                $ctx.state = 12;
                $ctx.finallyFallThrough = -2;
                break;
              case 11:
                $ctx.popTry();
                $ctx.maybeUncatchable();
                $__24 = $ctx.storedException;
                $ctx.state = 17;
                break;
              case 17:
                $__22 = true;
                $__23 = $__24;
                $ctx.state = 12;
                $ctx.finallyFallThrough = -2;
                break;
              case 12:
                $ctx.popTry();
                $ctx.state = 23;
                break;
              case 23:
                try {
                  if (!$__21 && $__18.return != null) {
                    $__18.return();
                  }
                } finally {
                  if ($__22) {
                    throw $__23;
                  }
                }
                $ctx.state = 21;
                break;
              case 21:
                $ctx.state = $ctx.finallyFallThrough;
                break;
              default:
                return $ctx.end();
            }
        }, $__51, this);
      }),
      _map: $traceurRuntime.initGeneratorFunction(function $__52(iterator, mapperFunc) {
        var $__21,
            $__22,
            $__23,
            $__19,
            $__18,
            value,
            $__24;
        return $traceurRuntime.createGeneratorInstance(function($ctx) {
          while (true)
            switch ($ctx.state) {
              case 0:
                $__21 = true;
                $__22 = false;
                $__23 = undefined;
                $ctx.state = 24;
                break;
              case 24:
                $ctx.pushTry(10, 11);
                $ctx.state = 13;
                break;
              case 13:
                $__19 = void 0, $__18 = (iterator)[Symbol.iterator]();
                $ctx.state = 9;
                break;
              case 9:
                $ctx.state = (!($__21 = ($__19 = $__18.next()).done)) ? 5 : 7;
                break;
              case 4:
                $__21 = true;
                $ctx.state = 9;
                break;
              case 5:
                value = $__19.value;
                $ctx.state = 6;
                break;
              case 6:
                $ctx.state = 2;
                return mapperFunc(value);
              case 2:
                $ctx.maybeThrow();
                $ctx.state = 4;
                break;
              case 7:
                $ctx.popTry();
                $ctx.state = 11;
                $ctx.finallyFallThrough = -2;
                break;
              case 10:
                $ctx.popTry();
                $ctx.maybeUncatchable();
                $__24 = $ctx.storedException;
                $ctx.state = 16;
                break;
              case 16:
                $__22 = true;
                $__23 = $__24;
                $ctx.state = 11;
                $ctx.finallyFallThrough = -2;
                break;
              case 11:
                $ctx.popTry();
                $ctx.state = 22;
                break;
              case 22:
                try {
                  if (!$__21 && $__18.return != null) {
                    $__18.return();
                  }
                } finally {
                  if ($__22) {
                    throw $__23;
                  }
                }
                $ctx.state = 20;
                break;
              case 20:
                $ctx.state = $ctx.finallyFallThrough;
                break;
              default:
                return $ctx.end();
            }
        }, $__52, this);
      }),
      _take: $traceurRuntime.initGeneratorFunction(function $__53(iterator, count) {
        var index,
            $__21,
            $__22,
            $__23,
            $__19,
            $__18,
            value,
            $__24;
        return $traceurRuntime.createGeneratorInstance(function($ctx) {
          while (true)
            switch ($ctx.state) {
              case 0:
                index = -1;
                $__21 = true;
                $__22 = false;
                $__23 = undefined;
                $ctx.state = 27;
                break;
              case 27:
                $ctx.pushTry(13, 14);
                $ctx.state = 16;
                break;
              case 16:
                $__19 = void 0, $__18 = (iterator)[Symbol.iterator]();
                $ctx.state = 12;
                break;
              case 12:
                $ctx.state = (!($__21 = ($__19 = $__18.next()).done)) ? 8 : 10;
                break;
              case 7:
                $__21 = true;
                $ctx.state = 12;
                break;
              case 8:
                value = $__19.value;
                $ctx.state = 9;
                break;
              case 9:
                $ctx.state = (++index >= count) ? 10 : 2;
                break;
              case 2:
                $ctx.state = 5;
                return value;
              case 5:
                $ctx.maybeThrow();
                $ctx.state = 7;
                break;
              case 10:
                $ctx.popTry();
                $ctx.state = 14;
                $ctx.finallyFallThrough = -2;
                break;
              case 13:
                $ctx.popTry();
                $ctx.maybeUncatchable();
                $__24 = $ctx.storedException;
                $ctx.state = 19;
                break;
              case 19:
                $__22 = true;
                $__23 = $__24;
                $ctx.state = 14;
                $ctx.finallyFallThrough = -2;
                break;
              case 14:
                $ctx.popTry();
                $ctx.state = 25;
                break;
              case 25:
                try {
                  if (!$__21 && $__18.return != null) {
                    $__18.return();
                  }
                } finally {
                  if ($__22) {
                    throw $__23;
                  }
                }
                $ctx.state = 23;
                break;
              case 23:
                $ctx.state = $ctx.finallyFallThrough;
                break;
              default:
                return $ctx.end();
            }
        }, $__53, this);
      })
    });
  }();
  function generateStocks() {
    var $__44 = $traceurRuntime.initGeneratorFunction(_generate);
    function _generate() {
      var stockNo,
          stockInfo;
      return $traceurRuntime.createGeneratorInstance(function($ctx) {
        while (true)
          switch ($ctx.state) {
            case 0:
              stockNo = 1;
              $ctx.state = 5;
              break;
            case 4:
              stockNo++;
              $ctx.state = 5;
              break;
            case 5:
              stockInfo = {
                name: ("Stock #" + stockNo),
                price: +(Math.random() * 100).toFixed(2)
              };
              console.log('Generated stock info', stockInfo);
              $ctx.state = 6;
              break;
            case 6:
              $ctx.state = 2;
              return stockInfo;
            case 2:
              $ctx.maybeThrow();
              $ctx.state = 4;
              break;
            default:
              return $ctx.end();
          }
      }, $__44, this);
    }
    return new Enumerable(_generate());
  }
  var enumerable = generateStocks().filter(function(stockInfo) {
    return stockInfo.price > 30;
  }).map(function(stockInfo) {
    return (stockInfo.name + " ($" + stockInfo.price + ")");
  }).take(5);
  console.log($traceurRuntime.spread(enumerable));
})();
//# sourceMappingURL=generators-traceur.js.map
