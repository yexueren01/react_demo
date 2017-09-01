
'use strict';
// let add = require('./add.js');
const expect = require('chai').expect;
const assert = require('assert');

function math(state = 0, action)   {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1
        case 'DECREMENT':
            return state - 1
        default:
            return state
    }
}

describe('math', function() {
    it("start", function () {
        expect(math(1,{type:'INCREMENT'})).to.be.equal(2);
        expect(math(2,{type:'INCREMENT'})).to.be.equal(3);
        expect(math(1,{type:'DECREMENT'})).to.be.equal(0);
    });
  });