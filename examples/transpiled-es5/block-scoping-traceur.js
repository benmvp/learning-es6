(function() {
  'use strict';
  function simpleExample(value) {
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
  simpleExample(2);
  varExample();
  letExample(2);
  letShadowExample();
  constExample();
})();
//# sourceMappingURL=block-scoping-traceur.js.map
