var path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/SimpleButton.jsx',
    output: {
        path: path.resolve('lib'),
        filename: 'SimpleButton.js',
        libraryTarget: 'commonjs2'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                use: 'babel-loader'
            }
        ]
    }
}
