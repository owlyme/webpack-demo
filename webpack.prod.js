const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');


process.env.NODE_ENV = JSON.stringify('production');

module.exports = merge(common, {
    mode: "production",
    devtool: "cheap-module-source-map",
    plugins: [
        new UglifyJSPlugin({
            sourceMap :true
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        })   
    ]
})