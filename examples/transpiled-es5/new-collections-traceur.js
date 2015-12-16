(function() {
  'use strict';
  var $__30,
      $__31,
      $__33,
      $__34;
  var Player = function() {
    function Player(name) {
      this.name = name;
    }
    return ($traceurRuntime.createClass)(Player, {}, {});
  }();
  {
    var steph = new Player('Stephen Curry');
    var kobe = new Player('Kobe Bryant');
    var lebron = new Player('LeBron James');
    var allStarVotes = new Map();
    allStarVotes.set(steph, 50).set(kobe, 0).set(lebron, 22);
    var allStarVotesCopy = new Map(allStarVotes);
    console.log(allStarVotes.get(steph));
    console.log(allStarVotes.has('Kevin Durant'));
    allStarVotes.delete(kobe);
    console.log(allStarVotes.size);
    allStarVotes.clear();
    console.log(allStarVotes.size);
    var $__4 = true;
    var $__5 = false;
    var $__6 = undefined;
    try {
      for (var $__2 = void 0,
          $__1 = (allStarVotesCopy.keys())[Symbol.iterator](); !($__4 = ($__2 = $__1.next()).done); $__4 = true) {
        var player = $__2.value;
        {
          console.log(player.name);
        }
      }
    } catch ($__7) {
      $__5 = true;
      $__6 = $__7;
    } finally {
      try {
        if (!$__4 && $__1.return != null) {
          $__1.return();
        }
      } finally {
        if ($__5) {
          throw $__6;
        }
      }
    }
    var $__11 = true;
    var $__12 = false;
    var $__13 = undefined;
    try {
      for (var $__9 = void 0,
          $__8 = (allStarVotesCopy.values())[Symbol.iterator](); !($__11 = ($__9 = $__8.next()).done); $__11 = true) {
        var count = $__9.value;
        {
          console.log(count);
        }
      }
    } catch ($__14) {
      $__12 = true;
      $__13 = $__14;
    } finally {
      try {
        if (!$__11 && $__8.return != null) {
          $__8.return();
        }
      } finally {
        if ($__12) {
          throw $__13;
        }
      }
    }
    var $__18 = true;
    var $__19 = false;
    var $__20 = undefined;
    try {
      for (var $__16 = void 0,
          $__15 = (allStarVotesCopy.entries())[Symbol.iterator](); !($__18 = ($__16 = $__15.next()).done); $__18 = true) {
        var $__29 = $__16.value,
            player$__35 = ($__30 = $__29[Symbol.iterator](), ($__31 = $__30.next()).done ? void 0 : $__31.value),
            count$__36 = ($__31 = $__30.next()).done ? void 0 : $__31.value;
        {
          console.log((player$__35.name + " (" + count$__36 + ")"));
        }
      }
    } catch ($__21) {
      $__19 = true;
      $__20 = $__21;
    } finally {
      try {
        if (!$__18 && $__15.return != null) {
          $__15.return();
        }
      } finally {
        if ($__19) {
          throw $__20;
        }
      }
    }
    var $__25 = true;
    var $__26 = false;
    var $__27 = undefined;
    try {
      for (var $__23 = void 0,
          $__22 = (allStarVotes)[Symbol.iterator](); !($__25 = ($__23 = $__22.next()).done); $__25 = true) {
        var $__32 = $__23.value,
            player$__37 = ($__33 = $__32[Symbol.iterator](), ($__34 = $__33.next()).done ? void 0 : $__34.value),
            count$__38 = ($__34 = $__33.next()).done ? void 0 : $__34.value;
        {
          console.log((player$__37.name + " (" + count$__38 + ")"));
        }
      }
    } catch ($__28) {
      $__26 = true;
      $__27 = $__28;
    } finally {
      try {
        if (!$__25 && $__22.return != null) {
          $__22.return();
        }
      } finally {
        if ($__26) {
          throw $__27;
        }
      }
    }
    allStarVotesCopy.forEach(function(count, player, map) {
      console.log((player.name + " (" + count + ")"));
      console.log(map === allStarVotesCopy);
    });
    var durant = new Player('Kevin Durant');
    var cp3 = new Player('Chris Paul');
    var theBrow = new Player('Anthony Davis');
    var russell = new Player('Russell Westbrook');
    var carmelo = new Player('Carmelo Anthony');
    var moreAllStarVotes = new Map([[durant, 20], [cp3, 5], [theBrow, 10]]);
    var rawData = [[russell, 12], [carmelo, 15]];
    var mergedMap = new Map($traceurRuntime.spread(allStarVotesCopy, moreAllStarVotes, rawData));
    console.log(mergedMap);
  }
  {
    var steph$__39 = new Player('Stephen Curry');
    var kobe$__40 = new Player('Kobe Bryant');
    var lebron$__41 = new Player('LeBron James');
    var allStarVotesWeak = new WeakMap();
    allStarVotesWeak.set(steph$__39, 50).set(kobe$__40, 0).set(lebron$__41, 22);
    console.log(allStarVotesWeak.get(steph$__39));
    console.log(allStarVotesWeak.has('Kevin Durant'));
    allStarVotesWeak.delete(kobe$__40);
    var clickMap = new WeakMap();
    $('p').click(function() {
      var pNode = this;
      var clicks = clickMap.get(pNode);
      if (!clicks) {
        clicks = 0;
      }
      clicks.set(pNode, ++clicks);
    });
  }
  {
    var union = function(setA, setB) {
      return new Set($traceurRuntime.spread(setA, setB));
    };
    var intersection = function(setA, setB) {
      return new Set($traceurRuntime.spread(setA).filter(function(item) {
        return setB.has(item);
      }));
    };
    var difference = function(setA, setB) {
      return new Set($traceurRuntime.spread(setA).filter(function(item) {
        return !setB.has(item);
      }));
    };
    var steph$__42 = new Player('Stephen Curry');
    var kobe$__43 = new Player('Kobe Bryant');
    var lebron$__44 = new Player('LeBron James');
    var allStars = new Set();
    allStars.add(steph$__42).add(kobe$__43).add(steph$__42).add(lebron$__44);
    var allStarsClone = new Set(allStars);
    console.log(allStars.has('Kevin Durant'));
    console.log(allStars.has(kobe$__43));
    allStars.delete(kobe$__43);
    console.log(allStars.size);
    allStars.clear();
    console.log(allStars.size);
    for (var allStar in allStarsClone) {
      console.log(allStar.name);
    }
    allStarsClone.forEach(function(value, key, setRef) {
      console.log(value.name);
      console.log(value === key);
      console.log(setRef === allStarsClone);
    });
    var setUnion = union(new Set(['a', 'b', 'c', 'd']), new Set(['d', 'e', 'f', 'g']));
    console.log(setUnion.size);
    var setIntersection = intersection(new Set(['a', 'b', 'c', 'd']), new Set(['d', 'e', 'f', 'g']));
    console.log(setIntersection.size);
    var setDifference = difference(new Set(['a', 'b', 'c', 'd']), new Set(['d', 'e', 'f', 'g']));
    console.log(setDifference.size);
  }
})();
//# sourceMappingURL=new-collections-traceur.js.map
