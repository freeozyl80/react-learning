// 创建两个reducer: count year
function count (state, action) {
  state = state || {count: 1}
  switch (action.type) {
    default:
      return state;
  }
}
function year (state, action) {
  state = state || {year: 2015}
  switch (action.type) {
    default:
      return state;
  }
}

// 将多个reducer合并成一个
var combineReducers = require('redux').combineReducers;
var rootReducer = combineReducers({
  count: count,
  year: year,
});

// 创建store，跟2.1没有任何区别
var createStore = require('redux').createStore;
var store = createStore(rootReducer);

console.log(store);
// var util = require('util');
// console.log(util.inspect(store));
//输出的结果，跟2.1的store在结构上不存在区别
// { dispatch: [Function: dispatch],
//   subscribe: [Function: subscribe],
//   getState: [Function: getState],
//   replaceReducer: [Function: replaceReducer]
// }
var bindActionCreators = require('redux').bindActionCreators;
var action = {type: 'test'};
console.log(bindActionCreators(action));