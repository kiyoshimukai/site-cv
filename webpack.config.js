/* eslint-disable no-undef */
const ESLintPlugin = require('eslint-webpack-plugin');

module.export = {
    entry: './src/js/main.js',
    output: {
        path: __dirname + '/dist',
        filename: 'paquet.js'
    },
    module: {
        rules: [{
            test: /\.m?js$/,
            exculde: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }
        }]
    }
}