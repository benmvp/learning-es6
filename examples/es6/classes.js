(function() {
	'use strict';

	{ // class declarations
		class InheritanceError extends Error { }

		// Define base Note class
		class Note {
			constructor(id, content, owner) {
				// make `Note` an abstract base class
				if (new.target === Note) {
					throw new InheritanceError('Note cannot be directly constructed.')
				}

				this._id = id;
				this._content = content;
				this._owner = owner;
			}

			static add(...properties) {
				// `this` will be the class on which `add()` was called
				// increment counter
				++this._idCounter;

				let id = `note${this._idCounter}`;

				// construct a new instance of the note passing in the
				// arguments after the ID. This is so subclasses can
				// get all of the arguments needed
				let note = new this(id, ...properties);

				// add note to the lookup by ID
				this._noteLookup[id] = note;

				return note;
			}

			static get(id) {
			  	return this._noteLookup[id];
			}

			// read-only
			get id() { return this._id; }

			get content() { return this._content; }
			set content(value) { this._content = value; }

			get owner() { return this._owner; }
			set owner(value) { this._owner = value; }

			toString() {
				return `ID: ${this._id}
					Content: ${this._content}
					Owner: ${this._owner}`;
			}
		}

		// Static "private" properties (not yet supported in class syntax)
		Note._idCounter = -1;
		Note._noteLookup = {};

		class ColorNote extends Note {
			constructor(id, content, owner, color='#ff0000') {
				// super constructor must be called first!
				super(id, content, owner);
				this._color = color;
			}

			get color() { return this._color; }
			set color(value) { this._color = value; }

			toString() {  // computed method names are supported
				// Override `toString()`, but call parent/super version
				// first
				return `${super.toString()}
					Color: ${this._color}`;
			}
		}

		// `add` factory method is defined on `Note`, but accessible
		// on ColorNote subclass
		let colorNote = ColorNote.add('My note', 'benmvp', '#0000ff');

		// output: ID: note0
		// Content: My Note
		// Owner: benmvp
		// Color: #0000ff
		console.log(`${colorNote}`);

		// output: true
		console.log(Note.get('note0') === colorNote);

		try {
			new Note(72, 'Vanilla note', 'benmvp');
		}
		catch (e) {
			// output: true
			console.log(e instanceof InheritanceError);
		}
	};

	{ // class expressions
		// A class expression
		const Note = class {
			constructor(id, content, owner) {
				this.id = id;
				this.content = content;
				this.owner = owner;
			}
		};

		// A immediately-invoked class expression, creating a one-off singleton
		let noteSingleton = new (class {
			constructor(id, content, owner) {
				this.id = id;
				this.content = content;
				this.owner = owner;
			}
		}) (0, 'some content', 'benmvp');
		console.log(noteSingleton);

		// a class declaration inheriting from a class expression
		class ColorNote extends (class {
			constructor(id, content, owner) {
				this.id = id;
				this.content = content;
				this.owner = owner;
			}
		}) {
			constructor(id, content, owner, color='#ff0000') {
				// super constructor must be called first!
				super(id, content, owner);
				this.color = color;
			}
		}
	}
}) ();
