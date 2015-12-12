(function() {
  'use strict';
  {
    var InheritanceError = function($__super) {
      function InheritanceError() {
        $traceurRuntime.superConstructor(InheritanceError).apply(this, arguments);
      }
      return ($traceurRuntime.createClass)(InheritanceError, {}, {}, $__super);
    }(Error);
    var Note = function() {
      function Note(id, content, owner) {
        this._id = id;
        this._content = content;
        this._owner = owner;
      }
      return ($traceurRuntime.createClass)(Note, {
        get id() {
          return this._id;
        },
        get content() {
          return this._content;
        },
        set content(value) {
          this._content = value;
        },
        get owner() {
          return this._owner;
        },
        set owner(value) {
          this._owner = value;
        },
        toString: function() {
          return ("ID: " + this._id + "\n\t\t\t\t\tContent: " + this._content + "\n\t\t\t\t\tOwner: " + this._owner);
        }
      }, {
        add: function() {
          for (var properties = [],
              $__10 = 0; $__10 < arguments.length; $__10++)
            properties[$__10] = arguments[$__10];
          ++this._idCounter;
          var id = ("note" + this._idCounter);
          var note = new (Function.prototype.bind.apply(this, $traceurRuntime.spread([null, id], properties)))();
          this._noteLookup[id] = note;
          return note;
        },
        get: function(id) {
          return this._noteLookup[id];
        }
      });
    }();
    Note._idCounter = -1;
    Note._noteLookup = {};
    var ColorNote = function($__super) {
      function ColorNote(id, content, owner) {
        var color = arguments[3] !== (void 0) ? arguments[3] : '#ff0000';
        $traceurRuntime.superConstructor(ColorNote).call(this, id, content, owner);
        this._color = color;
      }
      return ($traceurRuntime.createClass)(ColorNote, {
        get color() {
          return this._color;
        },
        set color(value) {
          this._color = value;
        },
        toString: function() {
          return ($traceurRuntime.superGet(this, ColorNote.prototype, "toString").call(this) + "\n\t\t\t\t\tColor: " + this._color);
        }
      }, {}, $__super);
    }(Note);
    var colorNote = ColorNote.add('My note', 'benmvp', '#0000ff');
    console.log(("" + colorNote));
    console.log(Note.get('note0') === colorNote);
    try {
      new Note(72, 'Vanilla note', 'benmvp');
    } catch (e) {
      console.log(e instanceof InheritanceError);
    }
  }
  ;
  {
    var Note$__11 = ($traceurRuntime.createClass)(function(id, content, owner) {
      this.id = id;
      this.content = content;
      this.owner = owner;
    }, {}, {});
    var noteSingleton = new (($traceurRuntime.createClass)(function(id, content, owner) {
      this.id = id;
      this.content = content;
      this.owner = owner;
    }, {}, {}))(0, 'some content', 'benmvp');
    console.log(noteSingleton);
    var ColorNote = function($__super) {
      function ColorNote(id, content, owner) {
        var color = arguments[3] !== (void 0) ? arguments[3] : '#ff0000';
        $traceurRuntime.superConstructor(ColorNote).call(this, id, content, owner);
        this.color = color;
      }
      return ($traceurRuntime.createClass)(ColorNote, {}, {}, $__super);
    }((($traceurRuntime.createClass)(function(id, content, owner) {
      this.id = id;
      this.content = content;
      this.owner = owner;
    }, {}, {})));
  }
})();
//# sourceMappingURL=classes-traceur.js.map
