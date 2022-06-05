/**
 * - Given two arrays which are sorted, this helper function should create
 *   a new array which is also sorted, and consists of all the elements
 *   in the two input arrays.
 * - This function should run in O(n+m) time and O(n+m) space and should not
 *   modify the parameters passed to it.
 * PSEUDOCODE:
 * - Create an empty array, take a look at the smallest values in each
 *   input array.
 * - While there are still values we haven't looked at:
 *   - If the value in the first array is smaller than the value in the second array,
 *     push the value in the first array into our results and move on to the next value
 *     in the first array.
 *   - If the value in the first array is larger than the value in the second array,
 *     push the value in the second array into our results and move on to the next value
 *     in the second array.
 *   - Once we exhaust one array, push in all remaining values from the other array.
 */
let merge = function (arr1, arr2) {

    let resultArr = [];
    let arr1Index = 0;
    let arr2Index = 0;
    while ((arr1Index < arr1.length) || (arr2Index < arr2.length)) {
        if (arr1[arr1Index] < arr2[arr2Index]) {
            resultArr.push(arr1[arr1Index]);
            arr1Index++;
        } else {
            resultArr.push(arr2[arr2Index]);
            arr2Index++;
        }
    }

    if (arr1Index === (arr1.length - 1)) {
        resultArr.push(arr2.slice(arr2Index));
    } else {
        resultArr.push(arr1.slice(arr1Index));
    }

    return resultArr;
}

tests({

    'merge should return a sorted array from elements of 2 sorted input arrays': function () {

        arrayeq([1,2,10,14,50,99,100], merge([1,10,50],[2,14,99,100]));
    }
})