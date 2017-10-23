var urlParam = require('./');
var domQuickText = require('dom-quick-text');

// urlParam.active = false;

var test = urlParam('test', 'default');
var test2 = urlParam('test2', 1000);
var redundancyTest = urlParam('test2', 10);
var test3Force = urlParam('test3', 2000, true);

domQuickText('test: ' + test);
domQuickText('test2: ' + test2);
domQuickText('test3Force: ' + test3Force);

console.log(test, test2, redundancyTest);

