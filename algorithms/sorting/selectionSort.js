let selectionSort = function (arr) {

    for (let i = 0; i < arr.length; i++) {
        let smallestMinIndex;
        let smallestMin = arr[i];
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < smallestMin) {
                smallestMinIndex = j;
                smallestMin = arr[j];
            }
        }
        if (smallestMin < arr[i]) {
            let temp = arr[i];
            arr[i] = smallestMin;
            arr[smallestMinIndex] = temp;
        }
    }

    return arr;
};

tests({

    '[19,44,38,5,47,15]': function () {
        arrayeq([4,15,19,38,44,47], selectionSort([19,44,38,5,47,15]));
    }
})