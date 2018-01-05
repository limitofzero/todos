const path = require('path');

const NODE_ENV = process.env.NODE_ENV || 'development';

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: 'src/index.html',
    filename: 'index.html',
    inject: 'body'
});

const UgligyJsPlugin = require('uglifyjs-webpack-plugin');

const ASSET_PATH = process.env.ASSET_PATH || '';

const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    devtool: NODE_ENV === 'development' ?  'source-map' : null,
    entry: [
        './src/index.js'
    ],
    output: {
        path: path.join(__dirname, 'build'),
        publicPath: ASSET_PATH,
        filename: 'index.bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.less$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                url: false,
                                minimize: true,
                                sourceMap: true
                            }
                        },
                        {
                            loader: 'less-loader',
                            options: {
                                sourceMap: true
                            }
                        }
                    ]
                })
            },
            { test: /\.jsx?$/, loader: 'babel-loader', exclude: /node_modules/ }
        ]
    },
    devServer: {
        historyApiFallback: {
            index: 'index.html',
          },
        contentBase: path.join(__dirname, '/'),
        inline: true
    },
    plugins: [HtmlWebpackPluginConfig, new ExtractTextPlugin("boundle.css"), new UgligyJsPlugin()]
};

