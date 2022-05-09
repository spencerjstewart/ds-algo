/**
 * Start looping with a variable called i from the end of the array
 *   towards the beginning.
 * Start an inner loop with a variable called j from the beginning until i - 1
 * If arr[j] is greater than arr[j+1], swap the values.
 * Return sorted array.
 */

let bubbleSort = function (arr) {

    for (let i = arr.length; i > 0; i--) {
        for (let j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j+1]) {
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }

    return arr;
}

tests({

    '[37, -10, 20, 0, 1, -8]': function () {
        arrayeq(JSON.stringify([-10, -8, 0, 1, 37]), bubbleSort([37, -10, 20, 0, 1, -8]))
    },

    '[0, 0, 0, 1, 0]': function () {
        arrayeq([0, 0, 0, 0, 1], bubbleSort([0, 0, 0, 1, 0]))
    }
})