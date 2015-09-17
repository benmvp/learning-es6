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

		// Template literals support interpolation
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
}) ();
