'use strict';

var _bind = Function.prototype.bind;

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x3, _x4, _x5) { var _again = true; _function: while (_again) { var object = _x3, property = _x4, receiver = _x5; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x3 = parent; _x4 = property; _x5 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(function () {
	'use strict';

	{
		(function () {
			// class declarations

			var InheritanceError = (function (_Error) {
				_inherits(InheritanceError, _Error);

				function InheritanceError() {
					_classCallCheck(this, InheritanceError);

					_get(Object.getPrototypeOf(InheritanceError.prototype), 'constructor', this).apply(this, arguments);
				}

				// Define base Note class
				return InheritanceError;
			})(Error);

			var Note = (function () {
				function Note(id, content, owner) {
					_classCallCheck(this, Note);

					this._id = id;
					this._content = content;
					this._owner = owner;
				}

				// Static "private" properties (not yet supported in class syntax)

				_createClass(Note, [{
					key: 'toString',
					value: function toString() {
						return 'ID: ' + this._id + '\n\t\t\t\t\tContent: ' + this._content + '\n\t\t\t\t\tOwner: ' + this._owner;
					}
				}, {
					key: 'id',

					// read-only
					get: function get() {
						return this._id;
					}
				}, {
					key: 'content',
					get: function get() {
						return this._content;
					},
					set: function set(value) {
						this._content = value;
					}
				}, {
					key: 'owner',
					get: function get() {
						return this._owner;
					},
					set: function set(value) {
						this._owner = value;
					}
				}], [{
					key: 'add',
					value: function add() {
						// `this` will be the class on which `add()` was called
						// increment counter
						++this._idCounter;

						var id = 'note' + this._idCounter;

						// construct a new instance of the note passing in the
						// arguments after the ID. This is so subclasses can
						// get all of the arguments needed

						for (var _len = arguments.length, properties = Array(_len), _key = 0; _key < _len; _key++) {
							properties[_key] = arguments[_key];
						}

						var note = new (_bind.apply(this, [null].concat([id], properties)))();

						// add note to the lookup by ID
						this._noteLookup[id] = note;

						return note;
					}
				}, {
					key: 'get',
					value: function get(id) {
						return this._noteLookup[id];
					}
				}]);

				return Note;
			})();

			Note._idCounter = -1;
			Note._noteLookup = {};

			var ColorNote = (function (_Note) {
				_inherits(ColorNote, _Note);

				function ColorNote(id, content, owner) {
					var color = arguments.length <= 3 || arguments[3] === undefined ? '#ff0000' : arguments[3];

					_classCallCheck(this, ColorNote);

					// super constructor must be called first!
					_get(Object.getPrototypeOf(ColorNote.prototype), 'constructor', this).call(this, id, content, owner);
					this._color = color;
				}

				// `add` factory method is defined on `Note`, but accessible
				// on ColorNote subclass

				_createClass(ColorNote, [{
					key: 'toString',
					value: function toString() {
						// computed method names are supported
						// Override `toString()`, but call parent/super version
						// first
						return _get(Object.getPrototypeOf(ColorNote.prototype), 'toString', this).call(this) + '\n\t\t\t\t\tColor: ' + this._color;
					}
				}, {
					key: 'color',
					get: function get() {
						return this._color;
					},
					set: function set(value) {
						this._color = value;
					}
				}]);

				return ColorNote;
			})(Note);

			var colorNote = ColorNote.add('My note', 'benmvp', '#0000ff');

			// output: ID: note0
			// Content: My Note
			// Owner: benmvp
			// Color: #0000ff
			console.log('' + colorNote);

			// output: true
			console.log(Note.get('note0') === colorNote);

			try {
				new Note(72, 'Vanilla note', 'benmvp');
			} catch (e) {
				// output: true
				console.log(e instanceof InheritanceError);
			}
		})();
	};

	{
		(function () {
			// class expressions
			// A class expression
			var Note = function Note(id, content, owner) {
				_classCallCheck(this, Note);

				this.id = id;
				this.content = content;
				this.owner = owner;
			};

			// A immediately-invoked class expression, creating a one-off singleton
			var noteSingleton = new ((function () {
				function _class(id, content, owner) {
					_classCallCheck(this, _class);

					this.id = id;
					this.content = content;
					this.owner = owner;
				}

				return _class;
			})())(0, 'some content', 'benmvp');
			console.log(noteSingleton);

			// a class declaration inheriting from a class expression

			var ColorNote = (function (_ref) {
				_inherits(ColorNote, _ref);

				function ColorNote(id, content, owner) {
					var color = arguments.length <= 3 || arguments[3] === undefined ? '#ff0000' : arguments[3];

					_classCallCheck(this, ColorNote);

					// super constructor must be called first!
					_get(Object.getPrototypeOf(ColorNote.prototype), 'constructor', this).call(this, id, content, owner);
					this.color = color;
				}

				return ColorNote;
			})((function () {
				function _class2(id, content, owner) {
					_classCallCheck(this, _class2);

					this.id = id;
					this.content = content;
					this.owner = owner;
				}

				return _class2;
			})());
		})();
	}
})();

//# sourceMappingURL=classes-babel.js.map