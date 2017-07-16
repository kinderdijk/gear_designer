var path = require('path');

module.exports = {
    entry: path.resolve(__dirname, 'src/lib/gear.js'),
    output: {
        path: path.resolve(__dirname, 'dist/lib'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {test: /\.js$/, exclude:/node_modules/, loader: 'babel-loader'}
        ]
    }
}
