/**
 * Accepts a number and adds up all the numbers from 0 to number passed in, inclusive.
 */
let recursiveRange = function (num) {

    if (num === 0) return 0;
    return num + recursiveRange(--num)
};

tests({
    
    'Input 6 should output 21': function () {
        eq(21, recursiveRange(6));
    },

    'Input 10 should output 55': function () {
        eq(55, recursiveRange(10));
    }
});