'use strict';

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
})();

//# sourceMappingURL=template-literals-babel.js.map