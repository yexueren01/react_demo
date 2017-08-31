'use strict';
// let add = require('./add.js');
const expect = require('chai').expect;
it('测试应该5000毫秒后结束', function(done) {
  var x = true;
  var f = function() {
    x = false;
    expect(x).to.be.not.ok;
    done(); // 通知Mocha测试结束
  };
  setTimeout(f, 4000);
});


//mocha -t 5000  --recursive ./test/*