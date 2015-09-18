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
        $__1 = replacements,
        firstName$__3 = $__1.firstName,
        lastName$__4 = $__1.lastName;
    console.log(("Name: " + lastName$__4 + ", " + firstName$__3));
    console.log(("Name: \${lastName}, " + firstName$__3));
  }
  {
    var eventCardInfo = {
      title: 'Nodevember 2015',
      url: 'http://nodevember.org/',
      tagline: 'Two days of Node and JavaScript',
      tags: ['JavaScript', 'Node']
    },
        $__2 = eventCardInfo,
        title = $__2.title,
        url = $__2.url,
        tagline = $__2.tagline,
        tags = $__2.tags,
        html = ("<section>\n\t\t\t\t\t\t<h3><a href=\"" + url + "\">" + title + "</a></h3>\n\t\t\t\t\t\t<p>" + tagline + "</p>\n\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t" + tags.map(function(tag) {
          return ("<li>" + tag + "</li>");
        }).join('\n') + "\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</section>");
    console.log(html);
  }
})();
//# sourceMappingURL=template-literals-traceur.js.map
