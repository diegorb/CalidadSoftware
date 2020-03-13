/***************   Author: Diego Ramirez Barba *************************
 * Unit Test - mocha and chai                      *********************
 * Problem: numMax                                 *********************
*/

'use strict'

var should = require('chai').should();
var numMax = require('./index');

describe('numMax', function() {
    it('should return x as the bigger number', function(){
        var isNotEmpty = numMax(5,2,2);

        isNotEmpty.should.be.equal(5);
    });

    it('should return y as the bigger number', function(){
        var isNotEmpty = numMax(5,7,2);

        isNotEmpty.should.be.equal(7);
    });

    it('should return z as the bigger number', function(){
        var isNotEmpty = numMax(5,2,8);

        isNotEmpty.should.be.equal(8);
    });

    it('should return y if x=y=z', function(){
        var isNotEmpty = numMax(5,9,5);

        isNotEmpty.should.be.equal(9);
    });
});
