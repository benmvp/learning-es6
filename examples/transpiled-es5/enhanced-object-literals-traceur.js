(function() {
  'use strict';
  function getCar(make, model, value) {
    var $__1;
    var valueKey = 'value',
        appreciateKey = 'appreciate';
    return ($__1 = {}, Object.defineProperty($__1, "make", {
      value: make,
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__1, "model", {
      value: model,
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__1, "_value", {
      value: value,
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__1, 'make' + make, {
      value: true,
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__1, "depreciate", {
      value: function() {
        this.value -= 2500;
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__1, appreciateKey, {
      value: function() {
        this.value += 1000;
      },
      configurable: true,
      enumerable: true,
      writable: true
    }), Object.defineProperty($__1, "value", {
      get: function() {
        return this._value;
      },
      configurable: true,
      enumerable: true
    }), Object.defineProperty($__1, valueKey, {
      set: function(value) {
        if (value < 0)
          throw new Error('invalid value');
        this._value = value;
      },
      configurable: true,
      enumerable: true
    }), $__1);
  }
  var car = getCar('Kia', 'Sorento', 40000);
  console.log(car);
  car.depreciate();
  car.appreciate();
  console.log(car.value);
})();
//# sourceMappingURL=enhanced-object-literals-traceur.js.map
