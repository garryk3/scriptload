var path = require('path');

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, 'examples/example.js'),
    output: {
        path: path.resolve(__dirname, 'examples/dist'),
        filename: 'example.bundle.js'
    },
    devServer: {
        contentBase: path.join(__dirname, 'examples/dist'),
        compress: true,
        port: 9000
    }
};