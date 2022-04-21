/**
 * Write a function called productOfArray which takes in an array of numbers
 * and returns the product of them all.
 */

let productOfArray = function (arr) {

    function findProduct(arr, currentIndex = 0) {
        if (currentIndex !== arr.length) {
            return arr[currentIndex] * findProduct(arr, ++currentIndex);
        }
        return 1;
    }

    return findProduct(arr);
};

tests({

    '[1,2,3]': function () {
        eq(6, productOfArray([1,2,3]));
    },

    '[1,2,0,10]': function () {
        eq(0, productOfArray([1,2,0,10]));
    }
})