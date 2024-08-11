/* eslint-disable no-undef */
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
    entry: './src/js/changerLangue.js',
    output: {
        path: __dirname + '/dist',
        filename: 'changerLangue.js'
    },
    module: {
        rules: [{
            test: /\.m?js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }
        }]
    }
}