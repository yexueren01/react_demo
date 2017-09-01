
// function math(state = 0, action)   {
//     switch (action.type) {
//         case 'INCREMENT':
//             return state + 1
//         case 'DECREMENT':
//             return state - 1
//         default:
//             return state
//     }
// }

// it('call reducers math', function () {
//     expect(math(1,{type:'INCREMENT'})).to.be.equal(2);
//     expect(math(1,{type:'DECREMENT'})).to.be.equal(0);
// });