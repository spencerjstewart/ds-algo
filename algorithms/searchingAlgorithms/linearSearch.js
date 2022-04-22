/**
 * Accept array and a value.
 * Loop through array and check if current array element is equal to the value.
 * If equal, return index at which element is found.
 * If value not found, return -1.
 */

let linearSearch = function (arr, val) {

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === val) {
            return i;
        }
    }

    return -1;
};

tests({

    '([10,15,20,25,30], 15)': function () {
        eq(1, linearSearch([10,15,20,25,30], 15));
    },

    '([9,8,7,6,5,4,3,2,1,0], 4)': function () {
        eq(5, linearSearch([9,8,7,6,5,4,3,2,1,0], 4));
    }
});