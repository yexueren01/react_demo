'use strict';
// let add = require('./add.js');

const expect = require('chai').expect;
const assert = require('assert');
const sinon = require('sinon');
//const once00 =require('../fun/once.js');
//import once0 from '../fun/once'




function once(fn) {
    var returnValue, called = false;
    return function () {
        if (!called) {
            console.log(called);
            called = true;
            returnValue = fn.apply(this, arguments);
        }
        return returnValue;
    };
}

it('calls the original function', function () {
    // 创建mock对象
    const callback = sinon.spy();
    // 调用测试方法
    const proxy = once(callback);
    proxy.apply();
    // 校验mock对象是否被调用;
    assert(callback.called);
    // 校验被调用了多少次
    assert(callback.calledOnce);
    //assert.equals(callback.callCount, 1);

    expect(callback.callCount).to.be.equal(1);
});

it('相等或不相等', function () {
    var callback = sinon.spy();
    var proxy = once(callback);
    var obj = {};

    proxy.call(obj, 1, 2, 3);
// 校验被哪个对象调用
    assert(callback.calledOn(obj));
     // 校验被调用时传入了哪些参数
    assert(callback.calledWith(1, 2, 3));
});