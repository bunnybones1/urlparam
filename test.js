var urlParams = require('./');
var domQuickText = require('dom-quick-text');

var test = urlParams.getParam('test', 'default');
var test2 = urlParams.getParam('test2', 1000);
var redundancyTest = urlParams.getParam('test2', 10);

domQuickText('test:' + test);
domQuickText('test2:' + test2);

console.log(test, test2, redundancyTest);

