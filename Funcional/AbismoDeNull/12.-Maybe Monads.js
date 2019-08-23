//Showing relevant parts from the Maybe implementation from ramda-fantasy lib
//See https://github.com/ramda/ramda-fantasy/blob/master/src/Maybe.js for full source

function Maybe(x) { //<-- main constructor that returns Maybe of Just or Nothing
    return x == null ? _nothing : Maybe.Just(x);
  }
  
  function Just(x) {
    this.value = x;
  }
  util.extend(Just, Maybe);
  
  Just.prototype.isJust = true;
  Just.prototype.isNothing = false;
  
  function Nothing() {}
  util.extend(Nothing, Maybe);
  
  Nothing.prototype.isNothing = true;
  Nothing.prototype.isJust = false;
  
  var _nothing = new Nothing();
  
  Maybe.Nothing = function() {
    return _nothing;
  };
  
  Maybe.Just = function(x) {
    return new Just(x);
  };
  
  Maybe.of = Maybe.Just;
  
  Maybe.prototype.of = Maybe.Just;
  
  
  // functor
  Just.prototype.map = function(f) { //Doing "map" on Just runs the func and returns Just out of the result
    return this.of(f(this.value));
  };
  
  Nothing.prototype.map = util.returnThis; // <-- Doing "Map" on Nothing doesnt do anything
  
  Just.prototype.getOrElse = function() {
    return this.value;
  };
  
  Nothing.prototype.getOrElse = function(a) {
    return a;
  };
  
  module.exports = Maybe;