const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.scss$/i,
                use: [
                    
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                            sourceMap: true,
                        }
                    },
                    
                    {
                        loader: 'resolve-url-loader',
                        options: {
                            sourceMap: true,
                        }
                    },
                    
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true,
                        }
                    }
                ]
            },
            {
                test: /\.(png|svg|gif)$/i,
                exclude: [/fonts/, /images/],
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'assets/icons/[name].[hash:7].[ext]'
                        }
                    }
                ]
            },
            {
                test: /\.(jpg|jpeg)$/i,
                exclude: [/fonts/, /icons/],
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'assets/images/[name].[hash:7].[ext]'
                        }
                    }
                ]
            },


            {
                test:/\.(png|ico)$/i,
                exclude: [/icons/, /fonts/, /favicon/],
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'public/[name].[hash:7].[ext]'
                        }
                    }
                ]
            },
            {
                test: /\.(woff|woff2|svg|eot|ttf|otf)$/i,
                exclude: /icons/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'assets/fonts/[name].[hash:7].[ext]'
                        }
                    }
                ]
            }

        ]
    },
    devtool: 'source-map',
    devServer: {
        inline: true,
        host: '192.168.0.35',
        port: 3000,
        contentBase: '././src',
        overlay:{
            warnings: true,
            errors: true
        },
        clientLogLevel: 'error',
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template:'././src/public/index.html',
        }),
        new HtmlWebpackPlugin({
            filename: 'home.html',
            template: '././src/public/home.html'
        })
    ]
});