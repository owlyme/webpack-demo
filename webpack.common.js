const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");


const devMode = process.env.NODE_ENV !== 'production'
console.log(devMode)

function recursiveIssuer(m) {
  if (m.issuer) {
    return recursiveIssuer(m.issuer);
  } else if (m.name) {
    return m.name;
  } else {
    return false;
  }
}
module.exports = {
    optimization: {        
        splitChunks: {
            chunks: "async",
            minSize: 30000,
            minChunks: 1,
            maxAsyncRequests: 5,
            maxInitialRequests: 3,
            automaticNameDelimiter: '~',
            name: true,
            cacheGroups: {
                vendors: {
                    name: 'vendors',
                    chunks: "all",
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10
                },
                commons: {
                    name: "commons",
                    chunks: "initial",
                    minChunks: 2
                },
                images: {
                    name: "images",
                    chunks: "initial",
                    test: /\.jpg|png|jpeg$/
                },
                appStyles: {
                    name: 'app',
                    test: (m,c,entry = 'app') => m.constructor.name === 'CssModule' && recursiveIssuer(m) === entry,
                    chunks: 'all',
                    enforce: true
                },
                mathStyles: {
                    name: 'math',
                    test: (m,c,entry = 'math') => m.constructor.name === 'CssModule' && recursiveIssuer(m) === entry,
                    chunks: 'all',
                    enforce: true
                }
            }
        }
    },
    entry: {
        app: './src/index.js',
        math: "./src/math.js"
    }, 
    module:{
        rules: [
        {
            test: /\.css$/,
            use: [                
                MiniCssExtractPlugin.loader,
                'css-loader'
            ]
        },
        {
            test: /\.(jpg|png|jpeg)$/,
            use: [ 
                {  
                    loader: 'file-loader',  
                    options: {
                        name: '[path][chunkhash].[ext]',//path为相对于context的路径
                        context:'',                       
                        publicPath:function(url){//返回最终的资源相对路径   
                            return path.relative('dist',url).replace(/\\/g,'/'); 
                        }
                    } 
                }         
            ]
        }
        ]
    },   
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'Caching',
            template: "./src/index.html"
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[chunkhash].css',
            chunkFilename: '[id].css',
        }),
        new OptimizeCSSAssetsPlugin({})
    ],
    output:{
        filename: 'js/[chunkhash].bundle.js',
        chunkFilename: 'js/modules/[chunkhash].bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
};