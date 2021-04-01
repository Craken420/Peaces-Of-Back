const Ramda = require('ramda')
const RamdaFantasy = require('ramda-fantasy')

/*Secuencia (S-Combinator)*/
const alt = R.curry((fn1, fn2, val)  => fn1(val) || fn2(val));

/* Bifurcación-Unión (FJ-Combinator) */
const fork = function(fnJoin, fn1, fn2) {
    return function(val) {
        return fnJoin(fn1(val), fn2(val));
    }
}

const getAvarage = fork(R.divide, R.sum, R.length);
getAvarage([5, 7, 10]);

/*---------------------------------------------------------------------------------------
  Functor
---------------------------------------------------------------------------------------*/

/* Another Example */
const add1 = (a) => a + 1;

class MyFunctor { //Custom "Functor"
  constructor(value) {
    this.val = value;
  }
  map(fn) {   //Applies function to this.val + returns new Myfunctor
   return new Myfunctor(fn(this.val));
  }
}
//temp is a Functor instance that's storing value 1
let temp = new MyFunctor(1); 
temp.map(add1) //-> temp allows us to map "add1"


/*---------------------------------------------------------------------------------------
  EITHER
---------------------------------------------------------------------------------------*/
const withTaxes = Ramda.curry((tax, price) => {
    if (!Ramda.is(Number, price) ) {
        return RamdaFantasy.Either.Left(new Error("Price is not numeric integer")); //ponemos el error en Left
    }
    return RamdaFantasy.Either.Right(price + (tax * price)); //ponemos el resultado en Right
});

const withDiscount = Ramda.curry((dis, price) => {
    if (!Ramda.is(Number, price) ) {
        return RamdaFantasy.Either.Left(new Error("Price is not numeric integer")); //ponemos el error en Left
    }
    if (price < 5) {
        return RamdaFantasy.Either.Left(new Error("Discounts not available for low-priced items")); //ponemos otro error en Left 
    } 
    return RamdaFantasy.Either.Right(price - (price * dis)); //ponemos el resultado en Right 
});

const showPrice = (total) => { console.log('Price: ' + total) }; 
const showError = (error) => { console.log('Error: ' + error.message); }; 
const eitherErrorOrPrice = RamdaFantasy.Either.either(showError, showPrice);

//calculamos el precio final de un producto que vale 25, siendo el IVA 21%, y el descuento 10%.
eitherErrorOrPrice(
    RamdaFantasy.Either.Right(25)
        .chain(withTaxes(0.21))
        .chain(withDiscount(0.1))
)

/*---------------------------------------------------------------------------------------
  Maybe
---------------------------------------------------------------------------------------*/
const getGreetingForUserFunct = user => {
    return RamdaFantasy.Maybe(user)
        .map( Ramda.path(['settings', 'language']) )
        .chain(maybeGreetingFunct);
};

const maybeGreetingFunct = Ramda.curry( (greetingsList, userLanguage) => {
    return RamdaFantasy.Maybe(greetingsList[userLanguage]);
})(allGreetings);

console.log(getGreetingForUserFunct(someUser).getOrElse(allGreetings.en));
