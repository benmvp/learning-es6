// create wrapper arrow function expression of console.log
var log = message => console.log(message);

log('Testing out arrow functions!');

// instead of specifying a traditional anonymous function 
// expression to map we can use an arrow function
log([1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(value => value * value));

// arrow functions are function expressions and can be
// assigned to variables
var descendingSortFunc = (a, b) => b - a,
	values = [2, 7, 5, 6],
	sortedValues = values.sort(descendingSortFunc);

log(values);
log(sortedValues);

// SYNTAX GOTCHA: objects my be wrapped in parenthesis

// returns an array of undefined values because the
// {} is interpreted as an empty code block that returns
// nothing
log([4, 6, 2].map(x => {}));

// also returns an array of undefined values because the
// {foo: x} is interpreted as a code block with the label
// foo: that has an expression x that is NOT returned
log([4, 5, 1].map(x => {foo: x}));

// successfully returns an array of empty objects
log([4, 5, 1].map(x => ({})));

// successfully returns an object with "foo" as key
// and number as value
log([4, 5, 1].map(x => ({foo: x})));

// Immediately-invoked arrow functions work too!
// Just be sure to put the parenthesis around the
// arrow function expression and not around the whole thing
(message => {
	for (var charNo = 0; charNo < message.length; charNo++) {
		log(message.charAt(charNo));
	}
}) ('hello');

// Arrow functions use lexical scoping for *this*, so it
// can be referenced like you would expect within anonymous
// functions
var car = {
	speed: 0,
	accelerate: function() {
		this.accelerator = setInterval(
			() => {
				// *this* is the same as it is outside
				// of the arrow function!
				this.speed++;
				log(this.speed);
			},
			100
		);
	},
	cruise: function() {
		clearInterval(this.accelerator);
		log('cruising at ' + this.speed + ' mph');
	}
};

car.accelerate();

setTimeout(
	() => car.cruise(),
	5000
);

// Arrow functions are identified as functions
log(typeof function() { }); // 'function'
log(typeof (() => {})); // 'function'
log(function() { } instanceof Function); // true
log((() => {}) instanceof Function); // true


function generateArrowFunctionReturningLexicalArguments() {
	// returns an arrow function expression
	// which itself returns the arguments used
	// when generating the arrow function
    return () => arguments;
}

var arrowFunction = generateArrowFunctionReturningLexicalArguments(5, 'foo', [5,4,3]);

// log arguments object with
// 5, 'foo', and [5,4,3]
log(arrowFunction());

