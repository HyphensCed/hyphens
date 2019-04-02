const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');


module.exports = merge(common, {
    mode: 'production',
    
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    {
                        loader: 'css-loader',
                        options: {}
                    },
                    {
                        loader: 'resolve-url-loader'
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
                            sourceMap: true
                        }
                    }
                ]
            },
            {
                test: /\.(png|svg|gif)$/i,
                exclude: [/fonts/, /images/],
                include: /icons/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                        name: 'assets/icons/[name].[hash:7].[ext]'
                        }
                    },
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            disable: true,
                            mozjpeg:{
                                progressive: true,
                                quality: 65
                            },
                            optipng: {
                                enabled: false
                            },
                            pngquant: {
                                quality: '65-90',
                                speed: 4
                            }
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
                    },
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            disable: true,
                            mozjpeg:{
                                progressive: true,
                                quality: 65
                            },
                            optipng: {
                                enabled: false
                            },
                            pngquant: {
                                quality: '65-90',
                                speed: 4
                            }
                        }
                    }

                ]
            },
            {
                test:/\.(png|ico)$/i,
                exclude: [/icons/, /fonts/],
                include: path.join(__dirname, 'public'),
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '../public/[name].[hash:7].[ext]',
                            outputPath: 'public',
                        }
                    },
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            disable: true,
                            mozjpeg:{
                                progressive: true,
                                quality: 65
                            },
                            optipng: {
                                enabled: false
                            },
                            pngquant: {
                                quality: '65-90',
                                speed: 4
                            }
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
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/[name].css',
            chunkFilename: 'css/[id].css'
        }),
        new HtmlWebpackPlugin({
            template: '././src/public/index.html',
            filename: 'public/index.html'
        }),

        new CopyWebpackPlugin([
            
                {from: '././src/public/favicon.ico', to: 'public'},
                {from: '././src/public/apple-touch-icon.png', to: 'public'},
                {from: '././src/public/favicon-16x16.png',  to: 'public'},
                {from: '././src/public/favicon-32x32.png',  to: 'public'}
            
        ])
    ]
});