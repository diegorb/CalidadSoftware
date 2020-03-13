/***************   Author: Diego Ramirez Barba *************************
 * Unit Test - mocha and chai                      *********************
 * Problem: app.codesignal.com longestDigitsPrefix *********************
*/

'use strict'

var should = require('chai').should();
var longestDigitsPrefix = require('./index');

describe('LongestDigitsPrefix', function() {

    it('should return and not empty array if inputString contains digits', function(){
        var isNotEmpty = longestDigitsPrefix("123aa1");
        console.log(isNotEmpty);
        isNotEmpty.should.be.equal("123");
    })
});
