# Sample npm script repo

npm scripts for the win!

## Remember!

* Pass arguments to scripts like this `npm run script -- -w -c -p`
* Always use double quotes "\"foo\"", not single quotes, to support Windows
* Put quotes around globs to prevent bash from expanding them

## Webpack

See [webpack cli docs](https://github.com/webpack/docs/wiki/cli)

* Basic: `webpack src/index.js www/index.bundle.js`
* With source maps `webpack -d src/index.js www/index.bundle.js`
* With watch `webpack -w src/index.js www/index.bundle.js`
* With production optimizations (minification, etc.) `webpack -p src/index.js www/index.bundle.js`
* With configuration file `webpack --config webpack.example.config.js`

## Browserify

See [browserify docs](https://github.com/substack/node-browserify#usage)

* Basic: `browserify src/index.js -o www/index.bundle.js`
* With source maps `browserify src/index.js -d -o www/index.bundle.js`
* With minification `browserify src/index.js | uglifyjs -c --mangle > www/index.bundle.js`
* With es6, react, transforms `browserify -e src/index.jsx -t [reactify --es6] -o www/index.bundle.js`

## Unix-like utilities

* & => npm-run-script --parallel
* rm => rimraf
* cp => cpx
* cat => catw
