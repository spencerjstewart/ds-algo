/**
 * Write a function called power which accepts a base and an exponent. The function
 * should return the power of the base to the exponent. This function should mimic
 * the functionality of Math.pow() - do not worry about negative bases and exponents.
 */

let power = function (base, exponent) {

    if (exponent === 0) return 1;
    if (exponent === 1) return base;

    return base * power(base, --exponent);
};

tests({
    'power(2,5)': function () {
        eq(32, power(2, 5));
    },

    'power(2,0)': function () {
        eq(1, power(2,0));
    }
});