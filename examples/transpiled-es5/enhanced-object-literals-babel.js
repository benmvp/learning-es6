'use strict';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

(function () {
	'use strict';

	function getCar(make, model, value) {
		var _Object$defineProperties;

		var valueKey = 'value',
		    appreciateKey = 'appreciate';

		return Object.defineProperties((_Object$defineProperties = {
			// with property value shorthand
			// syntax, you can omit the property
			// value if key matches variable
			// name
			make: make, // same as make: make
			model: model, // same as model: model

			_value: value

		}, _defineProperty(_Object$defineProperties, 'make' + make, true), _defineProperty(_Object$defineProperties, 'depreciate', function depreciate() {
			this.value -= 2500;
		}), _defineProperty(_Object$defineProperties, appreciateKey, function () {
			this.value += 1000;
		}), _Object$defineProperties), _defineProperty({
			value: {

				// ES5 property accessors still work
				// the same

				get: function get() {
					return this._value;
				},
				configurable: true,
				enumerable: true
			}
		}, valueKey, {

			// computed property keys also work
			// with property accessors

			set: function set(value) {
				if (value < 0) throw new Error('invalid value');

				this._value = value;
			},
			configurable: true,
			enumerable: true
		}));
	}

	var car = getCar('Kia', 'Sorento', 40000);

	// output: {
	//     make: 'Kia',
	//     model:'Sorento',
	//     _value: 40000,
	//     makeKia: true,
	//     depreciate: function(),
	//     value: Getter
	// }
	console.log(car);

	car.depreciate();
	car.appreciate();

	// output: 38500
	console.log(car.value);
})();
// computed property keys now work with
// object literals

// Method definition shorthand syntax
// omits `function` keyword & colon

// computed property keys also work
// withe method definition shorthand

//# sourceMappingURL=enhanced-object-literals-babel.js.map