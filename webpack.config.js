const path = require('path');

module.exports = {
    entry: ['./src/index.js'],
    output: {
        path: path.resolve(__dirname, 'public/'),   
        filename: 'bundle.js'
    },
    module: {
        rules: [
        {
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env', '@babel/react', '@babel/preset-flow']
            }
        }
        ]
    },
    devServer: {
        contentBase: './src',
        publicPath: '/public',
        watchOptions: {
        poll: true
        },
        watchContentBase: true
    }
  }