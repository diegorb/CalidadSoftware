/***************   Author: Diego Ramirez Barba *************************
 * Given a String, output its longest prefix which contains only digits
 * Example:
 * For inputString = "123aa1", the output should be "123" 
 * Problem: app.codesignal.com longestDigitsPrefix *********************
*/

'use strict'

var longestDigitsPrefix = inputString => {
    inputString = inputString.split('');
    let counter = 0;
    let maxstrlen = 0;
    let auxArray = [];
    let outputArray = [];
    const digits = '0123456789';

    for (let character of inputString) {
        if (digits.includes(character)) {
            counter++;
            auxArray.push(character);
        } else if (counter > maxstrlen) {
            outputArray = auxArray;
            maxstrlen = counter;
            counter = 0;
            auxArray = [];
        }
    }

    /* Verify the empty case */
    if (auxArray.length > outputArray ) {
        outputArray = auxArray;
    }

    /* Only one input character and its not a digit */
    if (!digits.includes(inputString[0])) {
        outputArray = [];
    }

    return outputArray.join('');
};

module.exports = longestDigitsPrefix;
