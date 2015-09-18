(function() {
  'use strict';
  {
    var firstName = 'Ben',
        lastName = "Ilegbodu";
    console.log("He said, \"It's your fault!\"");
    console.log(("Name: " + lastName + ", " + firstName));
    console.log("This is\n\t\t\tmulti-line text, so that\n\t\t\tnewline characters are\n\n\n\t\t\tnot needed. All whitespace\n\t\t\t\tis respected, including tabs.\n\n\t\t");
  }
  {
    var templateLiteral = "This is a literal";
    console.log((typeof templateLiteral === 'undefined' ? 'undefined' : $traceurRuntime.typeof(templateLiteral)));
    console.log(templateLiteral.length);
    console.log(templateLiteral.substr(5));
    console.log(templateLiteral.charAt(8));
  }
  {
    var timeOfDay = (new Date).getHours(),
        mealCost = 7.99,
        tax = 0.09;
    console.log(((timeOfDay < 12 ? 'Morning' : 'Evening') + " meal: $" + (mealCost * (1 + tax)).toFixed(2)));
    var replacements = {
      firstName: 'Ben',
      lastName: 'Ilegbodu'
    },
        $__3 = replacements,
        firstName$__5 = $__3.firstName,
        lastName$__6 = $__3.lastName;
    console.log(("Name: " + lastName$__6 + ", " + firstName$__5));
    console.log(("Name: \${lastName}, " + firstName$__5));
  }
  {
    var eventCardInfo = {
      title: 'Nodevember 2015',
      url: 'http://nodevember.org/',
      tagline: 'Two days of Node and JavaScript',
      tags: ['JavaScript', 'Node']
    },
        $__4 = eventCardInfo,
        title = $__4.title,
        url = $__4.url,
        tagline = $__4.tagline,
        tags = $__4.tags,
        html = ("<section>\n\t\t\t\t\t\t<h3><a href=\"" + url + "\">" + title + "</a></h3>\n\t\t\t\t\t\t<p>" + tagline + "</p>\n\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t" + tags.map(function(tag) {
          return ("<li>" + tag + "</li>");
        }).join('\n') + "\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</section>");
    console.log(html);
  }
  {
    var rawString = String.raw($traceurRuntime.getTemplateObject(["\\t\\tThis is not a\\n multi-line string!"], ["\t\tThis is not a\n multi-line string!"]));
    console.log(rawString);
    var name = 'Ben',
        nameRegExp = RegExp(String.raw($traceurRuntime.getTemplateObject(["\\(", "\\)"], ["\(", "\)"]), name));
    console.log(nameRegExp.test('(Ben) Ilegbodu'));
    var firstName$__7 = 'Ben',
        lastName$__8 = "Ilegbodu",
        interpolate = function(literals) {
          for (var substitutions = [],
              $__1 = 1; $__1 < arguments.length; $__1++)
            substitutions[$__1 - 1] = arguments[$__1];
          var interpolation = '';
          for (var i = 0; i < substitutions.length; i++) {
            interpolation += literals[i] + substitutions[i];
          }
          interpolation += literals[literals.length - 1];
          return interpolation;
        };
    console.log(interpolate($traceurRuntime.getTemplateObject(["Name: ", ", ", ""]), lastName$__8, firstName$__7));
    var Stringraw = function(literals) {
      for (var substitutions = [],
          $__2 = 1; $__2 < arguments.length; $__2++)
        substitutions[$__2 - 1] = arguments[$__2];
      var rawLiterals = literals.raw,
          interpolation = '';
      for (var i = 0; i < substitutions.length; i++) {
        interpolation += rawLiterals[i] + substitutions[i];
      }
      interpolation += rawLiterals[rawLiterals.length - 1];
      return interpolation;
    };
    console.log(Stringraw($traceurRuntime.getTemplateObject(["\\t\\tThis ", " is not a\\n multi-line string!"], ["\t\tThis ", " is not a\n multi-line string!"]), 1));
  }
})();
//# sourceMappingURL=template-literals-traceur.js.map
