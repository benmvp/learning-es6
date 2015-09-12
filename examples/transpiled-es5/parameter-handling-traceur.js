(function() {
  'use strict';
  var $__6,
      $__7;
  {
    {
      var getData = function(data) {
        var useCache = arguments[1] !== (void 0) ? arguments[1] : true;
        if (useCache) {
          console.log('using cache for', data);
        } else {
          console.log('not using cache', data);
        }
      };
      getData();
      getData({q: 'churches+in+Pittsburg'});
      getData({q: 'bbq+in+Nashville'}, undefined);
      getData({q: 'conferences+in+California'}, true);
      getData({q: 'Houston+Rockets'}, false);
    }
    {
      var getWidth = function() {
        console.log('getWidth called');
        return 7;
      },
          drawRect = function() {
            var width = arguments[0] !== (void 0) ? arguments[0] : getWidth();
            var height = arguments[1] !== (void 0) ? arguments[1] : width * 2;
            var options = arguments[2] !== (void 0) ? arguments[2] : {color: 'red'};
            console.log(width, height, options);
          };
      drawRect();
      drawRect(17);
      drawRect(4, 11);
      drawRect(7.5, 11, {color: 'blue'});
    }
    {
      var drawCube = function(x) {
        var y = arguments[1] !== (void 0) ? arguments[1] : 7;
        var z = arguments[2];
        console.log('cube', x, y, z);
      };
      drawCube();
      drawCube(2.5);
      drawCube(9, 15);
      drawCube(4, 1.7, 18);
      drawCube(11, undefined, 8.8);
      drawCube(14, null, 72);
    }
    {
      console.log([1, undefined, 5].map(function() {
        var x = arguments[0] !== (void 0) ? arguments[0] : 100;
        return x * 2;
      }));
    }
  }
  {
    {
      var join = function(separator) {
        for (var values = [],
            $__1 = 1; $__1 < arguments.length; $__1++)
          values[$__1 - 1] = arguments[$__1];
        return values.join(separator);
      };
      console.log(join('//', 'one', 'two', 'three'));
    }
    {
      var maxA = function() {
        var $__6,
            $__7;
        for (var values = [],
            $__2 = 0; $__2 < arguments.length; $__2++)
          values[$__2] = arguments[$__2];
        if (values.length > 3)
          throw Error('max 3 parameters allowed!');
        var $__5 = values,
            a = ($__6 = $__5[Symbol.iterator](), ($__7 = $__6.next()).done ? void 0 : $__7.value),
            b = ($__7 = $__6.next()).done ? void 0 : $__7.value,
            c = ($__7 = $__6.next()).done ? void 0 : $__7.value;
        return Math.max(a, b, c);
      };
      console.log(maxA(1, 2, 3));
      var maxB = function(a, b, c) {
        for (var shouldBeEmpty = [],
            $__3 = 3; $__3 < arguments.length; $__3++)
          shouldBeEmpty[$__3 - 3] = arguments[$__3];
        if (shouldBeEmpty.length > 0)
          throw Error('max 3 parameters allowed!');
        return Math.max(a, b, c);
      };
      console.log(maxB(4, 5, 6));
    }
  }
  {
    {
      var volume = function(width, length, height) {
        return width * length * height;
      };
      console.log(volume.apply(undefined, [5.3, 4.9, 6.8]));
      console.log(volume.apply((void 0), $traceurRuntime.spread([2, 8, 5])));
    }
    {
      var merge = function() {
        for (var objects = [],
            $__4 = 0; $__4 < arguments.length; $__4++)
          objects[$__4] = arguments[$__4];
        var masterObj = {};
        for (var i = 0; i < objects.length; i++) {
          var obj = objects[i];
          ;
          for (var key in obj)
            masterObj[key] = obj[key];
        }
        return masterObj;
      };
      var objectsList = [{
        count: 5,
        delay: 2000,
        early: true,
        message: 'Hello'
      }, {early: false}];
      var merged = merge.apply((void 0), $traceurRuntime.spread([{count: 10}], objectsList, [{delay: 1500}]));
      console.log(merged);
    }
    {
      var list = [9, 8, 7, 6, 5],
          $__5 = list,
          first = ($__6 = $__5[Symbol.iterator](), ($__7 = $__6.next()).done ? void 0 : $__7.value),
          second = ($__7 = $__6.next()).done ? void 0 : $__7.value,
          rest = $traceurRuntime.iteratorToArray($__6);
      console.log(rest, second, first);
      console.log($traceurRuntime.spread([11, 10], list));
    }
  }
  {
    var ajax = function(url) {
      var $__9,
          $__10;
      var $__8 = arguments[1] !== (void 0) ? arguments[1] : {},
          method = ($__9 = $__8.method) === void 0 ? 'GET' : $__9,
          delay = ($__10 = $__8.delay) === void 0 ? 1000 : $__10,
          callback = $__8.callback;
      console.log(url, method, delay);
      setTimeout(function() {
        return callback('DONE!');
      }, delay);
    };
    ajax('http://api.eventbrite.com/get', {
      delay: 2000,
      method: 'POST',
      callback: function(message) {
        console.log(message);
      }
    });
  }
})();
//# sourceMappingURL=parameter-handling-traceur.js.map
