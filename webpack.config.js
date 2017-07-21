var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'dist/lib');
var APP_DIR = path.resolve(__dirname, 'src/lib')

var config = {
    entry: APP_DIR + '/gear.js',
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {test: /\.js$/, exclude:/node_module/, loader: 'babel-loader'}
        ]
    }
}

module.exports = config;
