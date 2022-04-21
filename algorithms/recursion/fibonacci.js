/**
 * Write a function that calculates the fibonacci sequence and pushes each number
 * in the sequence to an array up to the nth num passed in.
 *
 * Return the array.
 */
let fib = function (num) {

    let arr = [1,1];
    let sum = 0;

    (function helper(iter = 0) {
        if (iter === (num - 2)) return;
        sum = arr[iter] + arr[iter + 1];
        arr.push(sum);
        iter++;
        helper(iter);
    })();

    return arr;
};

let checkArrayEquality = function (expected, actual) {

    /**
     * We have to check in both directions
     * otherwise [3,3,3] could satisfy [1,2,3] in one direction.
     */
    return expected.every(num => actual.includes(num)) &&
           actual.every(num => expected.includes(num));
};

tests({

    'Input 4 should output [1,1,2,3]': function () {
        let expectedArr = [1,1,2,3];
        let actualArr = fib(4);
        eq(true, checkArrayEquality(expectedArr, actualArr));
    },

    'Input 10 should output [1,1,2,3,5,8,13,21,34,55]': function () {
        let expectedArr = [1,1,2,3,5,8,13,21,34,55];
        let actualArr = fib(10);
        eq(true, checkArrayEquality(expectedArr, actualArr));
    }
})