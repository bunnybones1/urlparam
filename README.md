# urlparam

[![experimental](http://badges.github.io/stability-badges/dist/experimental.svg)](http://github.com/badges/stability-badges)

A utility to gleam values easily from url parameters. Includes console.log reminders of possible params.

## Usage

Construct URLs with parameters like this: `localhost:9966/?testString=hi&testNum=9001&testBool=false`

```
	var urlparam = require('urlparam');
	var param = urlparam('testNum', 10);
	// if testNum wasn't in the URL, 10 will be the used instead.
```

You can also quickly disable URLParams
```
	var urlparam = require('urlparam');
	urlparam.active = false;
	// For subsequent urlparam calls, testNum will be 10 despite what is in the URL
	var param = urlparam('testNum', 10);
```

[![NPM](https://nodei.co/npm/urlparam.png)](https://nodei.co/npm/urlparam/)

## License

MIT, see [LICENSE.md](http://github.com/bunnybones1/urlparam/blob/master/LICENSE.md) for details.
