var urlParams = require('./');
var domQuickText = require('dom-quick-text');

var test = urlParams.getParam('test');
var test2 = urlParams.getParam('test2');
var redundancyTest = urlParams.getParam('test2');

domQuickText('test:' + test);
domQuickText('test2:' + test2);

console.log(test, test2, redundancyTest);

