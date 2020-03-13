/***************   Author: Diego Ramirez Barba *************************
 * Unit Test - mocha and chai                      *********************
 * Problem: app.codesignal.com longestDigitsPrefix *********************
*/

'use strict'

var should = require('chai').should();
var longestDigitsPrefix = require('./index');

describe('LongestDigitsPrefix', function() {

    it('should return and empty string', function(){
        var isNotEmpty = longestDigitsPrefix("");

        isNotEmpty.should.be.equal("");
    });

    it('should return and empty string with a string without digits', function(){
        var isNotEmpty = longestDigitsPrefix("abcde");

        isNotEmpty.should.be.equal("");
    });

    it('should return and empty string with only one char non digit', function(){
        var isNotEmpty = longestDigitsPrefix("a");

        isNotEmpty.should.be.equal("");
    });

    it('should return and not empty array if inputString contains digits', function(){
        var isNotEmpty = longestDigitsPrefix("123aa1");

        isNotEmpty.should.be.equal("123");
    });

    it('should return the longest prefix in the string', function(){
        var isNotEmpty = longestDigitsPrefix("123aa1234b");

        isNotEmpty.should.be.equal("1234");
    });

    it('should return the longest prefix in the string not char case', function(){
        var isNotEmpty = longestDigitsPrefix("123aa1234");

        isNotEmpty.should.be.equal("123");
    });
});
