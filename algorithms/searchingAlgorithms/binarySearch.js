/**
 * Accepts sorted array and value.
 * Create left pointer at start and right pointer at end.
 * While the left is before the right pointer.
 *   If value found, return index
 *   If value too small, move left pointer up
 *   If value too large, move right pointer down
 * If value never found, return -1
 *
 */

let binarySearch = function (arr, val) {

    let leftIndex = 0;
    let rightIndex = arr.length - 1;

    if ((val < arr[leftIndex]) || (val > arr[rightIndex])) {
        return -1;
    }

    while (leftIndex < rightIndex) {
        let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
        let middleVal = arr[middleIndex];
        if (middleVal === val) {
            return middleIndex;
        }
        if (middleVal < val) {
            leftIndex = middleIndex;
            continue;
        }
        if (middleVal > val) {
            rightIndex = middleIndex;
        }
    }

    return -1;
};

tests({

    '[1,2,3,4,5],2': function () {
        eq(1, binarySearch([1,2,3,4,5],2));
    },

    '[1,2,3,4,5],6': function () {
        eq(-1, binarySearch([1,2,3,4,5],6));
    },

    '[5,6,10,13,14,18,30,34,35,37,44,64], 10': function () {

        eq(2, binarySearch([5,6,10,13,14,18,30,34,35,37,44,64], 10))
    }
});
