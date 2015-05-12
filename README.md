# npm scripts demo

## Why?

For most build systems...

* less code > extensible code
* simple mental models & readability > performance/speed
* "meat" of tasks require almost no boilerplate
* <3 unix <3 windows
* npm already widely used and understood
* testable

## Examples

* npm newww: https://github.com/k88hudson/newww/blob/npmscripts/package.json
* webpack, static server: https://github.com/mozilla/webmaker-android/blob/develop/package.json
* [id.webmaker.org](https://id.webmaker.org/signup): https://github.com/mozilla/id.webmaker.org/blob/develop/package.json
* custom tasks: https://github.com/mozilla/webmaker-app-cordova/blob/master/package.json

## Tricks and tips

* Group tasks like this: `npm-run-script build:**`
* Pass arguments to scripts like this `npm run script -- -w -c -p`
* Put quotes around globs to prevent bash from expanding them
* Some commands are OK in windows (&&, ||, >, |), but many are not. see Cheatsheet
* Access config vars with `$npm_package_config_variableName`

## Cheatsheet

### Watch

Many clis have a `--watch` option. Otherwise, `node-watch` is pretty good

### Run in parallel

Look at `npm-run-all --parallel`

### Less

Look at `autoless`

### Copying files

Look at `cpx` or `ncp`.

### Live reload, static server

`live-server`

### Node server

`nodemon`

### Webpack

See [webpack cli docs](https://github.com/webpack/docs/wiki/cli)

* Basic: `webpack src/index.js www/index.bundle.js`
* With source maps `webpack -d src/index.js www/index.bundle.js`
* With watch `webpack -w src/index.js www/index.bundle.js`
* With production optimizations (minification, etc.) `webpack -p src/index.js www/index.bundle.js`
* With configuration file `webpack --config webpack.example.config.js`

### Browserify

See [browserify docs](https://github.com/substack/node-browserify#usage)

* Basic: `browserify src/index.js -o www/index.bundle.js`
* With source maps `browserify src/index.js -d -o www/index.bundle.js`
* With minification `browserify src/index.js | uglifyjs -c --mangle > www/index.bundle.js`
* With es6, react, transforms `browserify -e src/index.jsx -t [reactify --es6] -o www/index.bundle.js`

### Unix-like utilities

* & => npm-run-script --parallel
* rm => rimraf
* cp => cpx
* cat => catw

## Caveats

* this is still kind of the wild west
* npm >=2.0.0
* a few todos (error handling, npm-debug log lols, warning about npm min version)
* blog post series upcoming!
