var urlParam = require('./');
var domQuickText = require('dom-quick-text');

// urlParam.active = false;

var test = urlParam('test', 'default');
var test2 = urlParam('test2', 1000);
var redundancyTest = urlParam('test2', 10);

domQuickText('test:' + test);
domQuickText('test2:' + test2);

console.log(test, test2, redundancyTest);

