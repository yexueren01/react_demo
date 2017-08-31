'use strict';
// let add = require('./add.js');
const expect = require('chai').expect;
// const assert = require('assert');

const foo = { bar: 'baz' };


describe('常见断言', function() {
  it('相等或不相等', function() {
    expect(4 + 5).to.be.equal(9);
    expect(4 + 5).to.be.not.equal(10);
    expect(foo).to.be.deep.equal({ bar: 'baz' });
  });

  it('布尔值为true', function() {
    expect('everthing').to.be.ok;
    expect(false).to.not.be.ok;
  });

  it('typeof', function() {
    expect('test').to.be.a('string');
    expect({ foo: 'bar' }).to.be.an('object');
  // expect(foo).to.be.an.instanceof(Foo);
  });


  it('include', function() {
    expect([ 1, 2, 3 ]).to.include(2);
    expect('foobar').to.contain('foo');
    expect({ foo: 'bar', hello: 'universe' }).to.include.keys('foo');
  });

  it('empty', function() {
  // empty
    expect([]).to.be.empty;
    expect('').to.be.empty;
    expect({}).to.be.empty;
  });

  it('match', function() {


  // match
    expect('foobar').to.match(/^foo/);
  });
});


// describe('Array', function() {
//   describe('#indexOf()', function() {
//     it('should return -1 when the value is not present', function() {
//       assert.equal(-1, [ 1, 2, 3 ].indexOf(4));
//     });
//   });
// });
