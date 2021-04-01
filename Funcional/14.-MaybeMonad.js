const Ramda = require('ramda')
const RamdaFantasy = require('ramda-fantasy')

const someUser = {
    name: 'some_name',
    email: 'some@email.com',
    settings: {
        language: 'opp'
    }
};

const allGreetings = {
    'en': 'Hello!',
    'sp': 'Hola!',
    'fr': 'Bonjour!'
};

/*---------------------------------------------------------------------------------------
  PI -> Imperative
---------------------------------------------------------------------------------------*/
const getGreetingForUser = (user) => {
if (!user) {
    return allGreetings.en;
}
if (user.settings && user.settings.language) {
    if (allGreetings[user.settings.language]) {
        return allGreetings[user.settings.language]
    } else {
        return allGreetings.en;
    }
} else {
    return allGreetings.en;
}
};
// console.log(getGreetingForUser(someUser));

/*---------------------------------------------------------------------------------------
  PF -> Functional
---------------------------------------------------------------------------------------*/
const getGreetingForUserFunct = user => {
    return RamdaFantasy.Maybe(user)
        .map( Ramda.path(['settings', 'language']) )
        .chain(maybeGreetingFunct);
};

const maybeGreetingFunct = Ramda.curry( (greetingsList, userLanguage) => {
    return RamdaFantasy.Maybe(greetingsList[userLanguage]);
})(allGreetings);

// console.log(getGreetingForUserFunct(someUser).getOrElse(allGreetings.en));

/*---------------------------------------------------------------------------------------
  Comparación: PI vs PF
---------------------------------------------------------------------------------------*/

/* 
    En lugar de verificar si user es null:

        if (!user) { return allGreetings.en; }

    usamos: 

        RamdaFantasy.Maybe(user) //metemos user en el wrapper

    -----------------------------------------------------------------------
    En lugar de:

        if (user.settings && user.settings.language)
            if (allGreetings[user.settings.language]) {}

    Usamos: map trabaja con los datos en caso de existir 

        RamdaFantasy.Maybe(user).map(Ramda.path(['settings', 'language'])) 
        
    -----------------------------------------------------------------------
    En lugar de devolver el valor por defecto en el else 

        return indexURLs['en'];

    Usamos getOrElse: Devuelve el valor de algun lenguaje encontrado, 
                      o el valor por defecto que le especificamos.

        getGreetingForUserFunct(someUser).getOrElse(allGreetings.en)
*/

//Parts Maybe from ramda-fantasy lib

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