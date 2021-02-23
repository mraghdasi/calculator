const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

let config = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.[contenthash].js'
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css',
            chunkFilename: '[id].css',
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ],
    }
};

module.exports = (env, {mode}) => {

    if (mode === 'development') {
        config.devtool = 'source-map';
        config.devServer = {
            contentBase: path.join(__dirname, 'build'),
            compress: true,
            port: 3000,
            open: true
        }
    }

    if (mode === 'production') {
        config.plugins.push(new CleanWebpackPlugin())
    }

    return config;
};