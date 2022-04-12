/*
Given two strings, write a function
to determine if the second string is an anagram of the first.
 */

let isAnagram = function (str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }

    str1Counts = {};
    str2Counts = {};

    [...str1].forEach(c => {
        if (str1Counts.hasOwnProperty(c)) {
            str1Counts[c] = ++str1Counts[c];
        } else {
            str1Counts[c] = 1;
        }
    });

    [...str2].forEach(c => {
        if (str2Counts.hasOwnProperty(c)) {
            str2Counts[c] = ++str2Counts[c];
        } else {
            str2Counts[c] = 1;
        }
    });

    for (const [k, v] of Object.entries(str1Counts)) {
        if (str2Counts[k] !== v) {
            return false;
        }
    }

    return true;
}

tests({
    'Each string should be the same length.': function () {
        eq(false, isAnagram('a', ''));
    },

    'Each string should have the same number of each character': function () {
        eq(true, isAnagram('', ''));
        eq(false, isAnagram('aaz', 'zza'));
        eq(true, isAnagram('anagram', 'nagaram'));
        eq(false, isAnagram('rat', 'car'));
        eq(false, isAnagram('awesome', 'awesom'));
        eq(true, isAnagram('qwerty', 'qeywrt'));
        eq(true, isAnagram('texttwisttime', 'timetwisttext'));
    }
})