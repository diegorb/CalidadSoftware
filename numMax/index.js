'use strict'

var numMax = (x,y,z) => {
    let max = 0;
    if (x>y && x>z) {
        max = x;
    } else {
        if (z>y) {
            max = z;
        } else {
            max = y;
        }
    }
    return max;
}

module.exports = numMax;
