let factorial = function (num) {

    if (num === 0) return 1;

    return num * factorial(--num);
}

tests({

    'factorial(1)': function () {
        eq(1, factorial(1));
    },

    'factorial(4)': function () {
        eq(24, factorial(4));
    }
})