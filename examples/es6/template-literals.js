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
}) ();
