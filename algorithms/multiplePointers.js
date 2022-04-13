let util = {
    contains: function (val, arr) {
        return arr.indexOf(val) >= 0;
    }
}

/*
    - accepts sorted array
    - counts unique values in array
    - there can be negative vals
 */
let countUniqueValues = function (arr) {
    let left = 0;
    let right = arr.length - 1;
    let numUnique = 0;
    let uniques = [];

    while (left < right) {
        let leftVal = arr[left];
        let rightVal = arr[right];

        if (!util.contains(leftVal, uniques)) {
            uniques.push(leftVal);
            numUnique = ++numUnique;
        }

        if (!util.contains(rightVal, uniques)) {
            uniques.push(rightVal);
            numUnique = ++numUnique;
        }

        left = ++left;
        right = --right;

        // Handles an edge case where left === right on lines 36 and 37 on odd array length >= 3
        if (left === right) {
            right = ++right;
        }
    }

    return numUnique;
};

tests({
    '[1,1,1,1,1,2]': function () {
        eq(2, countUniqueValues([1,1,1,1,1,2]));
    },

    '[1,2,3,4,4,4,7,7,12,12,13]': function () {
        eq(7, countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]));
    },

    '[]': function () {
        eq(0, countUniqueValues([]));
    },

    '[-2, 1]': function () {
        eq(2, countUniqueValues([-2,1]));
    },

    '[-2, 1, 3]': function () {
        eq(3, countUniqueValues([-2,1,3]));
    },

    '[-2,-1,-1,0,1]': function () {
        eq(4, countUniqueValues([-2,-1,-1,0,1]));
    },

    '[-3,-2,-1,-1,-1,0,0,0,1,2,3]': function () {
        eq(7, countUniqueValues([-3,-2,-1,-1,-1,0,0,0,1,2,3]));
    }
});