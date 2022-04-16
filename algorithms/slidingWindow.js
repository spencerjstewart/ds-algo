let maxSubArraySum = function (arr, size) {

    if (size > arr.length) {
        return null;
    }

    if (size === arr.length) {
        let sum = 0;
        for (let i = 0; i < arr.length; i++) {
            sum += arr[i];
        }
        return sum;
    }

    let leftIndex = 0
    let rightIndex = size - 1;
    let maxSum;

    let initialSum = 0;
    for (let i = 0; i < size; i++) {
        initialSum += arr[i];
    }
    maxSum = initialSum;

    let slidingSum = maxSum;
    while (rightIndex < arr.length) {
        slidingSum -= arr[leftIndex];
        leftIndex++;
        rightIndex++;
        slidingSum += arr[rightIndex];
        if (slidingSum > maxSum) {
            maxSum = slidingSum;
        }
    }

    return maxSum;
}

tests({

    '[1,2,5,2,8,1,5], 2': function () {
        eq(10, maxSubArraySum([1,2,5,2,8,1,5], 2));
    },

    '[1,2,5,2,8,1,5], 4': function () {
        eq(17, maxSubArraySum([1,2,5,2,8,1,5], 4));
    },

    '[4,2,1,6], 1': function () {
        eq(6, maxSubArraySum([4,2,1,6], 1));
    },

    '[4,2,1,6,2], 4': function () {
        eq(13, maxSubArraySum([4,2,1,6,2], 4));
    },

    '[], 4': function () {
        eq(null, maxSubArraySum([], 4));
    }
});