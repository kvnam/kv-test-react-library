const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
    entry: {
        index: path.resolve(__dirname, './src/index.js')
      },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: "[name].js",
        libraryTarget: 'umd',
        globalObject: 'this'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.styl/,
                use: ['isomorphic-style-loader', 'css-loader', 'stylus-loader']
            }
        ]
    },
    resolve: {
      modules: [path.resolve(__dirname, 'src'), path.resolve(__dirname,'node_modules')],
      extensions: ['.js']
    }
};
