/*
    start by picking 2nd element in array
    compare the second el with the one before and swap if necessary
    continue to the next el and if it is in the incorrect order, iterate through the sorted portion
        to place the el in the correct place
*/

let insertionSort = function (arr) {

    for (let i = 1; i < arr.length; i++) {
        let currentVal = arr[i]
        let j = i - 1;
        for (j; j >= 0 && arr[j] > currentVal; j--) {
            arr[j+1] = arr[j];
        }
        arr[j+1] = currentVal;
    }

    return arr;
};

tests({

    '[29,10,14,37,14]': function () {
        arrayeq([29,10,14,37,14], insertionSort([29,10,14,37,14]));
    }
})