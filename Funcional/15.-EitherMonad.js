const Ramda = require('ramda')
const RamdaFantasy = require('ramda-fantasy')
// // Imperative
const withTaxes = (tax, price) => {
    if (!_.isNumber(price)) {
        return new Error("Price is not numeric");
    }
    return price + (tax * price);
};

const withDiscount = (dis, price) => { 
     if (!_.isNumber(price)) { 
       return new Error("Price is not numeric"); 
     } 
     if (price < 5) {
       return new Error("Discounts not available for low-priced items"); 
     }
    return price - (price * dis);
}

const isError = e => e && e.name === 'Error';


const calculatePrice = (price, tax, discount) => {
    const priceWithTaxes = withTaxes(tax, price);
    if (isError(priceWithTaxes)) {
        return console.log('Error: ' + priceWithTaxes.message);
    }

    const priceWithTaxesAndDiscount = withDiscount(discount, priceWithTaxes);

    if (isError(priceWithTaxesAndDiscount)) {
        return console.log('Error: ' + priceWithTaxesAndDiscount.message);
    }
    console.log('Total Price: ' + priceWithTaxesAndDiscount);
}
//calculamos el precio final de un producto que vale 25, siendo el IVA 21%, y el descuento 10%.
calculatePrice(25, 0.21, 0.10)

// Functional
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