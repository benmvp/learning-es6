'use strict';

var _templateObject = _taggedTemplateLiteral(['\t\tThis is not a\n multi-line string!'], ['\\t\\tThis is not a\\n multi-line string!']),
    _templateObject2 = _taggedTemplateLiteral(['(', ')'], ['\\(', '\\)']),
    _templateObject3 = _taggedTemplateLiteral(['Name: ', ', ', ''], ['Name: ', ', ', '']),
    _templateObject4 = _taggedTemplateLiteral(['\t\tThis ', ' is not a\n multi-line string!'], ['\\t\\tThis ', ' is not a\\n multi-line string!']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

(function () {
	'use strict';

	{
		// simple examples
		var firstName = 'Ben',
		    lastName = 'Ilegbodu';

		// Basic template literal is surrounding by
		// backticks so single/double quotes do need
		// to be escaped
		// output: He said, "It's your fault!"
		console.log('He said, "It\'s your fault!"');

		// Template literals support interpolation.
		// The values within `firstName` and `lastName`
		// are substituted into where the tokens are
		// output: Name: Ilegbodu, Ben
		console.log('Name: ' + lastName + ', ' + firstName);

		// Template literals support multi-line strings
		// output: This is
		// 		multi-line text, so that
		//		newline characters are
		//
		//
		//		not needed. All whitespace
		//			is respected, including tabs.
		//
		//
		console.log('This is\n\t\t\tmulti-line text, so that\n\t\t\tnewline characters are\n\n\n\t\t\tnot needed. All whitespace\n\t\t\t\tis respected, including tabs.\n\n\t\t');
	}

	{
		// template literals are strings
		var templateLiteral = 'This is a literal';

		// output: string
		console.log(typeof templateLiteral);

		// output: 17
		console.log(templateLiteral.length);

		// output: is a literal
		console.log(templateLiteral.substr(5));

		// output: a
		console.log(templateLiteral.charAt(8));
	}

	{
		// template literals using expression interpolation
		var timeOfDay = new Date().getHours(),
		    mealCost = 7.99,
		    tax = 0.09;

		// any sort of expression can go inside the
		// substitution token
		// output: Morning/Evening meal: $8.71
		console.log((timeOfDay < 12 ? 'Morning' : 'Evening') + ' meal: $' + (mealCost * (1 + tax)).toFixed(2));

		var replacements = {
			firstName: 'Ben',
			lastName: 'Ilegbodu'
		};
		var firstName = replacements.firstName;
		var lastName = replacements.lastName;

		// you have to destructure an object first in order
		// to use its key-values as substitution values
		// output: Name: Ilegbodu, Ben
		console.log('Name: ' + lastName + ', ' + firstName);

		// output: Name: ${lastName}, Ben
		console.log('Name: ${lastName}, ' + firstName);
	}

	{
		// multi-line template literals + interpolation
		var eventCardInfo = {
			title: 'Nodevember 2015',
			url: 'http://nodevember.org/',
			tagline: 'Two days of Node and JavaScript',
			tags: ['JavaScript', 'Node']
		};
		var title = eventCardInfo.title;
		var url = eventCardInfo.url;
		var tagline = eventCardInfo.tagline;
		var tags = eventCardInfo.tags;
		var html = '<section>\n\t\t\t\t\t\t<h3><a href="' + url + '">' + title + '</a></h3>\n\t\t\t\t\t\t<p>' + tagline + '</p>\n\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t' + tags.map(function (tag) {
			return '<li>' + tag + '</li>';
		}).join('\n') + '\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</section>';

		// The HML output isn't properly aligned, but that
		// doesn't really matter anymore
		console.log(html);
	}

	{
		// tagged templates
		var rawString = String.raw(_templateObject);

		// instead of tabs and new lines being in the string,
		// the actual escape characters are in the string
		// (effectively the backslash is escaped)
		// output: "\\t\\tThis is not a\\n multi-line string!"
		console.log(rawString);

		var _name = 'Ben',
		   

		// no more double escaping and we can use
		// interpolation!
		nameRegExp = RegExp(String.raw(_templateObject2, _name));

		console.log(nameRegExp.test('(Ben) Ilegbodu'));

		var firstName = 'Ben',
		    lastName = 'Ilegbodu',
		    interpolate = function interpolate(literals) {
			// literals = ['Name: ', ', ', '']
			// substitutions = ['Ilegbodu', 'Ben']
			// substitutions.length == literals.length - 1

			var interpolation = '';

			// loop through based on length of substitutions
			// since its shorter by 1

			for (var _len = arguments.length, substitutions = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
				substitutions[_key - 1] = arguments[_key];
			}

			for (var i = 0; i < substitutions.length; i++) {
				interpolation += literals[i] + substitutions[i];
			}

			// add the extra literal to the end
			interpolation += literals[literals.length - 1];

			return interpolation;
		};

		// instead of using the default interpolation
		// that ES6 offers, we're reimplementing it using
		// `interpolate` function
		// output: Name: Ilegbodu, Ben
		console.log(interpolate(_templateObject3, lastName, firstName));

		var Stringraw = function Stringraw(literals) {
			// literals.raw is an array of raw strings
			var rawLiterals = literals.raw,
			    interpolation = '';

			// loop through based on length of substitutions
			// since its shorter by 1

			for (var _len2 = arguments.length, substitutions = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
				substitutions[_key2 - 1] = arguments[_key2];
			}

			for (var i = 0; i < substitutions.length; i++) {
				interpolation += rawLiterals[i] + substitutions[i];
			}

			// add the extra raw literal to the end
			interpolation += rawLiterals[rawLiterals.length - 1];

			return interpolation;
		};

		console.log(Stringraw(_templateObject4, 1));
	}
})();

//# sourceMappingURL=template-literals-babel.js.map