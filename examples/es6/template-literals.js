(function() {
	'use strict';

	{ // simple examples
		let firstName = 'Ben',
			lastName = `Ilegbodu`;

		// Basic template literal is surrounding by
		// backticks so single/double quotes do need
		// to be escaped
		// output: He said, "It's your fault!"
		console.log(`He said, "It's your fault!"`);

		// Template literals support interpolation.
		// The values within `firstName` and `lastName`
		// are substituted into where the tokens are
		// output: Name: Ilegbodu, Ben
		console.log(`Name: ${lastName}, ${firstName}`);

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
		console.log(`This is
			multi-line text, so that
			newline characters are


			not needed. All whitespace
				is respected, including tabs.

		`);
	}

	{ // template literals are strings
		let templateLiteral = `This is a literal`;

		// output: string
		console.log(typeof templateLiteral);

		// output: 17
		console.log(templateLiteral.length);

		// output: is a literal
		console.log(templateLiteral.substr(5));

		// output: a
		console.log(templateLiteral.charAt(8));
	}

	{	// template literals using expression interpolation
		let timeOfDay = (new Date).getHours(),
			mealCost = 7.99,
			tax = 0.09;

		// any sort of expression can go inside the
		// substitution token
		// output: Morning/Evening meal: $8.71
		console.log(`${timeOfDay < 12 ? 'Morning' : 'Evening'} meal: $${(mealCost * (1 + tax)).toFixed(2)}`);

		let replacements = {
				firstName: 'Ben',
				lastName: 'Ilegbodu'
			},
			{firstName, lastName} = replacements;

		// you have to destructure an object first in order
		// to use its key-values as substitution values
		// output: Name: Ilegbodu, Ben
		console.log(`Name: ${lastName}, ${firstName}`);

		// output: Name: ${lastName}, Ben
		console.log(`Name: \${lastName}, ${firstName}`);
	}

	{ // multi-line template literals + interpolation
		let eventCardInfo = {
				title: 'Nodevember 2015',
				url: 'http://nodevember.org/',
				tagline: 'Two days of Node and JavaScript',
				tags: ['JavaScript', 'Node']
			},
			{title, url, tagline, tags} = eventCardInfo,
			html = `<section>
						<h3><a href="${url}">${title}</a></h3>
						<p>${tagline}</p>
						<ul>
							${
								tags.map(
									tag => `<li>${tag}</li>`
								).join('\n')
							}
						</ul>
					</section>`;

		// The HML output isn't properly aligned, but that
		// doesn't really matter anymore
		console.log(html);
	}

	{ // tagged templates
		let rawString = String.raw`\t\tThis is not a\n multi-line string!`;

		// instead of tabs and new lines being in the string,
		// the actual escape characters are in the string
		// (effectively the backslash is escaped)
		// output: "\\t\\tThis is not a\\n multi-line string!"
		console.log(rawString);

		let name = 'Ben',

			// no more double escaping and we can use
			// interpolation!
			nameRegExp = RegExp(String.raw`\(${name}\)`);

		console.log(nameRegExp.test('(Ben) Ilegbodu'));

		let firstName = 'Ben',
			lastName = `Ilegbodu`,
			interpolate = function(literals, ...substitutions) {
				// literals = ['Name: ', ', ', '']
				// substitutions = ['Ilegbodu', 'Ben']
				// substitutions.length == literals.length - 1

			    let interpolation = '';

			    // loop through based on length of substitutions
			    // since its shorter by 1
			    for (let i = 0; i < substitutions.length; i++) {
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
		console.log(interpolate`Name: ${lastName}, ${firstName}`);

		let
			Stringraw = function(literals, ...substitutions) {
				// literals.raw is an array of raw strings
			    let rawLiterals = literals.raw,
			    	interpolation = '';

			    // loop through based on length of substitutions
			    // since its shorter by 1
			    for (let i = 0; i < substitutions.length; i++) {
			        interpolation += rawLiterals[i] + substitutions[i];
			    }

			    // add the extra raw literal to the end
			    interpolation += rawLiterals[rawLiterals.length - 1];

			    return interpolation;

			};

		console.log(Stringraw`\t\tThis ${1} is not a\n multi-line string!`);
	}
}) ();
