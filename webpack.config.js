const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
    entry: './scripts/index.ts',
    module: {
        rules: [
            {test: /\.css$/, use: ['style-loader', 'css-loader']},
            {test: /\.tsx?$/, use: 'ts-loader', exclude: /node_modules/},
        ]
    },
    output: {
        path: path.resolve(__dirname, 'docs/'),
        filename: '[name].bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
            cache: false
        }),
        new CleanWebpackPlugin()
    ],
    resolve: {
        extensions: ['.ts', '.js']
    },
    devServer: { 
        static: {
            directory: path.join(__dirname, 'styles'),
          },
        hot:true, 
        port: 9002
    },
    mode: 'production',
    optimization: {
        splitChunks: {
            chunks: 'all'
        },
    },
}