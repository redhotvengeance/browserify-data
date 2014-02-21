# browserify-data

Dataify your [browserify](https://github.com/substack/node-browserify) bundles.

## Data me up

Want to package up some data, manifest, or config files in your browserify bundle? Then you've come to the right place.

## What can I use

Right now, browserify-data will recognize and bundle JSON, CSON, and YAML files.

## How to install

```bash
npm install browserify-data
```

## How to use

Require it:

```js
var data = require('./data.json|cson|yaml');
```

browserify it with the JavaScript API:

```js
var bd = require('browserify-data');

var b = browserify();
b.transform(bd);
b.add('main.js');
b.bundle(...);
```

...or the CLI:

```bash
browserify -t browserify-data main.js > bundle.js
```

## Contribute

1. Fork
2. Create
3. Code
4. Push
5. Submit
6. Yay!

## License

(The MIT License)

Copyright (c) 2013 Ian Lollar

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
