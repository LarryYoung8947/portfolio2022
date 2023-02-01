const { builtinModules } = require('module');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "development",
    entry: {
        bundle: path.resolve(__dirname, 'src/index.js')},
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist')
        },
        port: 8080,
        open: true,
        hot: true,
        compress: true,
        historyApiFallback: true
    },
    module: {
        rules: [
            {
                test:/\.scss$/,
                use: ['style-loader',
                    'css-loader',
                    'sass-loader'],
            },
            {
                test: /\.(jsx|js)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                    },
                },
            },
            {
                test: /\.(png|svg|jpg|gif|pdf)$/,
                use: [
                  {
                    loader: 'file-loader',
                    options: {
                      name: '[name].[ext]'
                    }
                  }
                ]
              }             
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Webpack Environment',
            filename: 'index.html',
            template: 'src/template.html'
        })
    ]
}