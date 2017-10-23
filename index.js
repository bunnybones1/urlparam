var paramKeys = [];
var paramValues = [];
var wasProvided = [];
var forcedFlags = [];
var reminderGiven = false;
function remind() {
	if(reminderGiven) return;
	reminderGiven = true;
	console.log("URL PARAMS AVAILABLE: " + paramKeys.join(", "));
	var shouldRefresh = forcedFlags.some(function(forced, i) {
		return forced && !wasProvided[i];
	});
	if(shouldRefresh) {
		var keyPairs = paramKeys.map(function(key, i) {
			return forcedFlags[i] ? key + '=' + paramValues[i] : null;
		});
		keyPairs = keyPairs.filter(function(v) { return v; });
		var keyPairString = keyPairs.join('&');
		var newLoc = window.location.origin + '?' + keyPairString;

		window.location = newLoc;
	}
};

function getURLParam(name, defaultValue, forcedExpose) {
	if(!getURLParam.active) return defaultValue || null;
	var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
	var results = regex.exec(window.location.href);
	var result = false;
	var provided = true;
	if (results == null){
	   result = defaultValue;
	   provided = false;
	} else if(results[1] === "true"){
		result = true;
	} else if(results[1] === "false"){
		result = false;
	} else if(!isNaN(results[1])){
		result = Number(results[1]);
	} else {
		result = results[1] || defaultValue || false;
	}
	if(paramKeys.indexOf(name) == -1) {
		paramKeys.push(name);
		paramValues.push(result);
		forcedFlags.push(!!forcedExpose);
		wasProvided.push(provided);
		reminderGiven = false;
		setTimeout(remind, 2000);
	}

	return result; 
}

getURLParam.active = true;

module.exports = getURLParam;