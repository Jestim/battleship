const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/app/index.js',
    module: {
        rules: [{
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(js)$/,
                use: 'babel-loader'
            },
        ],
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Battleship',
        })
    ],
};