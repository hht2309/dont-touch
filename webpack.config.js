var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');
var UglifyJsPlugin = require('uglifyjs-webpack-plugin');

var extractPlugin = new ExtractTextPlugin({
   filename: 'style.css'
});

module.exports = {
    entry: {
        vendor: ['jquery', './src/js/waypoints'],
        main:  './src/js/main.js'
    }, 
   
    output: {
        path: path.resolve(__dirname, 'dist/'),
        filename: 'js/[name].bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['es2015']
                        }
                    }
                ]
            },
            {
                test: /\.scss$/,
                use: extractPlugin.extract({
                    use: [
                        {
                            loader: 'css-loader', 
                            options: {minimize: 'true'}
                        },
                        {
                            loader: 'sass-loader'
                        }
                    ]
                })
            },
            {
                test: /\.html$/,
                use: ['html-loader']
            },
            {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
                loader: 'file-loader?name=img/[name].[ext]'
            }
        ]
    },
    plugins: [
        extractPlugin,
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }), 
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
          }),
        new webpack.optimize.CommonsChunkPlugin({
            name: "vendor",
            minChunks: Infinity,
          }), 
        new UglifyJsPlugin()
        
    ]
};