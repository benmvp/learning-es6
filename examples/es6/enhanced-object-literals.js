(function() {
	'use strict';

	function getCar(make, model, value) {
		let valueKey = 'value',
			appreciateKey = 'appreciate';

		return {
			// with property value shorthand
			// syntax, you can omit the property
			// value if key matches variable
			// name
			make,  // same as make: make
			model, // same as model: model

			_value: value,

			// computed property keys now work with
			// object literals
			['make' + make]: true,

			// Method definition shorthand syntax
			// omits `function` keyword & colon
			depreciate() {
				this.value -= 2500;
			},

			// computed property keys also work
			// withe method definition shorthand
			[appreciateKey]() {
				this.value += 1000;
			},
		
			// ES5 property accessors still work
			// the same
			get value() {
				return this._value;
			},

			// computed property keys also work
			// with property accessors
			set [valueKey](value) {
				if (value < 0)
					throw new Error('invalid value');

				this._value = value;
			}
		};
	}

	let car = getCar('Kia', 'Sorento', 40000);

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
}) ();
