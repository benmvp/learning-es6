(function() {
	'use strict';

	class Player {
		constructor(name) {
			this.name = name;
		}
	}

    { // Map
		let steph = new Player('Stephen Curry');
		let kobe = new Player('Kobe Bryant');
		let lebron = new Player('LeBron James');
		let allStarVotes = new Map();

		allStarVotes.set(steph, 50)
		    .set(kobe, 0)
		    .set(lebron, 22);

		// make a clone of allstarVotes
		let allStarVotesCopy = new Map(allStarVotes);

		// output: 50
		console.log(allStarVotes.get(steph));

		// output: false
		console.log(allStarVotes.has('Kevin Durant'));

		allStarVotes.delete(kobe);

		// output: 2
		console.log(allStarVotes.size);

		allStarVotes.clear();

		// output: 2
		console.log(allStarVotes.size);

		// log each player name since player
		// is a key in the map
		for (let player of allStarVotesCopy.keys()) {
		    console.log(player.name);
		}

		// log each all star vote count since
		// count is a value in the map
		for (let count of allStarVotesCopy.values()) {
		    console.log(count);
		}

		// log each player name and his votes count
		// Uses array destructuring to assign [key, value]
		// pair into separate variables'
		for (let [player, count] of allStarVotesCopy.entries()) {
		    console.log(`${player.name} (${count})`);
		}

		// log each player name and his votes count
		// together. Ex: 'Stephen Curry (50)
		// Uses array destructuring to assign [key, value]
		// pair into separate variables
		for (let [player, count] of allStarVotes) {
		    console.log(`${player.name} (${count})`);
		}

		// functional verion of calling `.entries()`
		// `map` is a reference to `allStarVotes`
		allStarVotesCopy.forEach((count, player, map) => {
		    console.log(`${player.name} (${count})`);
			console.log(map === allStarVotesCopy);
		});

		let durant = new Player('Kevin Durant');
		let cp3 = new Player('Chris Paul');
		let theBrow = new Player('Anthony Davis');

		let russell = new Player('Russell Westbrook');
		let carmelo = new Player('Carmelo Anthony');

		let moreAllStarVotes = new Map([
		    [durant, 20],
		    [cp3, 5],
		    [theBrow, 10]
		]);
		let rawData = [
		    [russell, 12],
		    [carmelo, 15]
		];

		let mergedMap = new Map([...allStarVotesCopy, ...moreAllStarVotes, ...rawData]);

		console.log(mergedMap);
    }

	{ // WeakMap
		let steph = new Player('Stephen Curry');
		let kobe = new Player('Kobe Bryant');
		let lebron = new Player('LeBron James');
		let allStarVotesWeak = new WeakMap();

		allStarVotesWeak.set(steph, 50)
		    .set(kobe, 0)
		    .set(lebron, 22);

		// output: 50
		console.log(allStarVotesWeak.get(steph));

		// output: false
		console.log(allStarVotesWeak.has('Kevin Durant'));

		allStarVotesWeak.delete(kobe);

		// set up metadata click map
		let clickMap = new WeakMap();

		// on each click, add the div to the map
		// (with initial click) or increment its
		// click count
		$('p').click(function() {
		    let pNode = this;
		    let clicks = clickMap.get(pNode);

		    if (!clicks) {
		        clicks = 0;
		    }

		    clicks.set(pNode, ++clicks);
		});
	}

	{ // Set
		function union(setA, setB) {
			return new Set([...setA, ...setB]);
		}
		function intersection(setA, setB) {
		    return new Set([...setA].filter(item => setB.has(item)));
		}

		function difference(setA, setB) {
		    return new Set([...setA].filter(item => !setB.has(item)));
		}

		let steph = new Player('Stephen Curry');
		let kobe = new Player('Kobe Bryant');
		let lebron = new Player('LeBron James');

		let allStars = new Set();

		allStars.add(steph)
		    .add(kobe)
		    .add(steph) // duplicates are removed
		    .add(lebron);

		// create a clone by passing set as constructor of another
		let allStarsClone = new Set(allStars);

		// output: false
		console.log(allStars.has('Kevin Durant'));

		// output: true
		console.log(allStars.has(kobe));

		allStars.delete(kobe);

		// output: 2
		console.log(allStars.size);

		allStars.clear();

		// output: 2
		console.log(allStars.size);

		// easily iterate over a set using `for-of`
		for (let allStar in allStarsClone) {
		    console.log(allStar.name);
		}

		// can also iterate using `.forEach()`
		allStarsClone.forEach((value, key, setRef) => {
		    console.log(value.name);

		    // In a set the value & key are the same
		    console.log(value === key);

		    // The third parameter is a reference to the
		    // instance
		    console.log(setRef === allStarsClone);
		});

		let setUnion = union(
		    new Set(['a', 'b', 'c', 'd']),
		    new Set(['d', 'e', 'f', 'g'])
		);

		// output: 8
		console.log(setUnion.size);

		let setIntersection = intersection(
		    new Set(['a', 'b', 'c', 'd']),
		    new Set(['d', 'e', 'f', 'g'])
		);

		// output: 1
		console.log(setIntersection.size);

		let setDifference = difference(
		    new Set(['a', 'b', 'c', 'd']),
		    new Set(['d', 'e', 'f', 'g'])
		);

		// output: 3
		console.log(setDifference.size);
	}
}) ();
