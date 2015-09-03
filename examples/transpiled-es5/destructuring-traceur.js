(function() {
  'use strict';
  var $__4,
      $__5,
      $__9,
      $__11,
      $__12,
      $__14,
      $__15,
      $__16,
      $__17,
      $__19,
      $__20,
      $__24,
      $__25,
      $__26,
      $__27,
      $__28,
      $__29,
      $__30,
      $__33,
      $__34;
  {
    var $__2 = {
      fName: 'John',
      age: 15,
      lName: 'Doe'
    },
        lName = $__2.lName,
        fName = $__2.fName;
    var $__3 = [8, 4, 100, -5, 20],
        first = ($__4 = $__3[Symbol.iterator](), ($__5 = $__4.next()).done ? void 0 : $__5.value),
        second = ($__5 = $__4.next()).done ? void 0 : $__5.value,
        third = ($__5 = $__4.next()).done ? void 0 : $__5.value;
    console.log(lName + ', ' + fName);
    console.log(third, second, first);
  }
  ;
  {
    var config = {
      delay: 500,
      title: 'Hi!',
      info: {name: 'Elijah'}
    },
        $__6 = config,
        one = $__6.info.name,
        delay = $__6.delay,
        three = $__6.empty,
        four = $__6.title;
    console.log(one, delay, three, four);
  }
  ;
  {
    var bKey = 'b';
    var $__8 = {
      a: 1,
      b: 2,
      c: 3
    },
        b = $__8[bKey],
        a = $__8.a,
        c = $__8.c;
    console.log(a, b, c);
    b = {};
    (($__9 = {
      a: 1,
      b: 2
    }, a = $__9.a, b.count = $__9.b, $__9));
    console.log(a, b);
  }
  ;
  {
    var myArray = [1, ['hello'], true],
        $__10 = myArray,
        first$__36 = ($__11 = $__10[Symbol.iterator](), ($__12 = $__11.next()).done ? void 0 : $__12.value),
        secondNest = ($__16 = (($__12 = $__11.next()).done ? void 0 : $__12.value)[Symbol.iterator](), ($__17 = $__16.next()).done ? void 0 : $__17.value),
        third$__37 = ($__12 = $__11.next()).done ? void 0 : $__12.value;
    console.log(first$__36, secondNest, third$__37);
  }
  ;
  {
    var sequence = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34],
        $__18 = sequence,
        first$__38 = ($__19 = $__18[Symbol.iterator](), ($__20 = $__19.next()).done ? void 0 : $__20.value),
        third$__39 = ($__19.next(), ($__20 = $__19.next()).done ? void 0 : $__20.value),
        fourth = ($__20 = $__19.next()).done ? void 0 : $__20.value,
        seventh = ($__19.next(), $__19.next(), ($__20 = $__19.next()).done ? void 0 : $__20.value);
    ;
    console.log(first$__38, third$__39, fourth, seventh);
  }
  ;
  {
    var json = {
      shapes: ['circle', 'square', 'triangle'],
      colors: 5,
      fill: true,
      author: {
        firstName: 'Ben',
        lastName: 'Ilegbodu',
        city: 'Pittsburg'
      }
    },
        $__21 = json,
        fill = $__21.fill,
        $__22 = $__21.author,
        lastName = $__22.lastName,
        firstName = $__22.firstName,
        city = $__22.city,
        secondShape = ($__26 = $__21.shapes[Symbol.iterator](), $__26.next(), ($__27 = $__26.next()).done ? void 0 : $__27.value),
        numColors = $__21.colors;
    console.log(fill, secondShape, numColors);
    console.log(lastName, firstName, city);
  }
  ;
  {
    var a$__40 = 1,
        b$__41 = 2;
    ($__28 = [a$__40, b$__41], b$__41 = ($__29 = $__28[Symbol.iterator](), ($__30 = $__29.next()).done ? void 0 : $__30.value), a$__40 = ($__30 = $__29.next()).done ? void 0 : $__30.value, $__28);
    console.log(a$__40, b$__41);
  }
  ;
  {
    var $__31 = location,
        scheme = $__31.protocol,
        domain = $__31.host,
        path = $__31.pathname,
        query = $__31.search,
        hash = $__31.hash,
        url = $__31.href;
    console.log((scheme + '//' + domain + path + query + hash) == url);
  }
  ;
  {
    var $__32 = /^(\d\d\d)-(\d\d\d)-(\d\d\d\d)$/.exec('650-555-1234'),
        areaCode = ($__33 = $__32[Symbol.iterator](), $__33.next(), ($__34 = $__33.next()).done ? void 0 : $__34.value),
        exchange = ($__34 = $__33.next()).done ? void 0 : $__34.value,
        lineNumber = ($__34 = $__33.next()).done ? void 0 : $__34.value;
    console.log(areaCode, exchange, lineNumber);
  }
  ;
  {
    var find = function(list, token) {
      for (var i = 0; i < list.length; i++) {
        if (list[i].indexOf(token) > -1)
          return {
            index: i,
            val: list[i]
          };
      }
      return {
        index: -1,
        val: undefined
      };
    };
    var fruits = ['apple', 'grape', 'peach', 'pear'],
        $__35 = find(fruits, 'ape'),
        index = $__35.index,
        val = $__35.val;
    console.log(index, val);
  }
  ;
})();
//# sourceMappingURL=destructuring-traceur.js.map
