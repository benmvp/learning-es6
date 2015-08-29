(function() {
  'use strict';
  function simpleExample(value) {
    var constValue = value;
    if (value) {
      var varValue = value;
      var letValue = value;
      console.log('inside block', varValue, letValue);
    }
    console.log('outside block');
    console.log(varValue);
    try {
      console.log(letValue);
    } catch (e) {
      console.log('letValue not accessible', e);
    }
  }
  function varExample() {
    var myVar = 7;
    console.log('myVar after declaration', myVar);
    console.log('laterVar before declaration', laterVar);
    laterVar = 10;
    if (myVar < 20) {
      var myVar = 'foo';
      var innerVar = true;
      console.log('myVar inside block', myVar);
    }
    var laterVar;
    console.log('laterVar after declaration', laterVar);
    console.log('myVar outside block', myVar === 7);
    console.log('innerVar outside block', innerVar);
  }
  function letExample(value) {
    if (value) {
      var letValue = value;
      console.log('inside block', letValue);
    }
    try {
      console.log(letValue);
      console.log('let not faithfully handled');
    } catch (e) {
      console.log('letValue not accessible', e);
    }
  }
  function letShadowExample() {
    var x = 15;
    if (true) {
      var x$__1 = 21;
      console.log('x inner block', x$__1);
    }
    console.log('x outer block', x);
  }
  function constExample() {
    var NAME_KEY = 'name';
    var UNFROZEN_OBJ_CONST = {
      key: 'adam',
      val: 'eve'
    };
    var FROZEN_OBJ_CONST = Object.freeze({
      key: 'jesus',
      val: 'paul'
    });
    UNFROZEN_OBJ_CONST.key = 'moses';
    console.log('const value', NAME_KEY);
    console.log('unfrozen object', UNFROZEN_OBJ_CONST);
    console.log('frozen object', FROZEN_OBJ_CONST);
  }
  function temporalDeadZoneExample() {
    var func = function() {
      console.log('value is: ', value);
    };
    var value = 'foo';
    func();
  }
  function simpleLoopExample() {
    for (var i = 0; i < 5; i++) {
      console.log('i=', i);
    }
    for (var j = 0; j < 5; j++) {
      console.log('j=', j);
    }
    console.log('after i=', i);
  }
  function callbackLoopVarExample() {
    var $body = $('body');
    for (var i = 0; i < 5; i++) {
      var $button = $('<button>var ' + i + '</button>');
      $button.click(function() {
        return console.log('var button ' + i + ' clicked!');
      });
      $body.append($button);
    }
  }
  function callbackLoopNamedFunctionExample() {
    var $body = $('body');
    var loop = function(index) {
      var $button = $('<button>function ' + index + '</button>');
      $button.click(function() {
        return console.log('function button ' + index + ' clicked!');
      });
      l[2] = 'foo';
      $body.append($button);
    };
    for (var i = 0; i < 5; i++) {
      loop(i);
    }
  }
  function callbackLoopLetExample() {
    var $body = $('body');
    var $__2 = function(i) {
      var $button = $('<button>let ' + i + '</button>');
      $button.click(function() {
        return console.log('let button ' + i + ' clicked!');
      });
      $body.append($button);
    };
    for (var i = 0; i < 5; i++) {
      $__2(i);
    }
  }
  simpleExample(2);
  varExample();
  letExample(2);
  letShadowExample();
  constExample();
  temporalDeadZoneExample();
  simpleLoopExample();
  callbackLoopVarExample();
  callbackLoopNamedFunctionExample();
  callbackLoopLetExample();
})();
//# sourceMappingURL=block-scoping-traceur.js.map
