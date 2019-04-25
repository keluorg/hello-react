var path = require('path');

module.exports = {
    entry: path.resolve(__dirname, 'src/webpack-hello.js'),
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    }
}