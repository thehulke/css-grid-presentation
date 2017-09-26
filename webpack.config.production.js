/* eslint-disable */

var path    = require("path");
var webpack = require("webpack");

module.exports = {
    entry  : [
        "babel-polyfill",
        "./index"
    ],
    output : {
        path      : path.join(__dirname, "dist"),
        filename  : "bundle.js",
        publicPath: "/dist/"
    },
    plugins: [
        new webpack.DefinePlugin({
            "process.env": {
                "NODE_ENV": JSON.stringify("production")
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compressor: {
                warnings: false
            }
        })
    ],
    module : {
        loaders: [{
            test  : /\.md$/,
            loader: "html-loader!markdown-loader?gfm=false"
        }, {
            test   : /\.(js|jsx)$/,
            exclude: /node_modules/,
            loader : "babel-loader"
        }, {
            test  : /\.css$/,
            loader: "style-loader!css-loader"
        }, {
            test  : /\.(png|jpg|gif)$/,
            loader: "url-loader?limit=8192"
        }, {
            test  : /\.svg$/,
            loader: "url-loader?limit=10000&mimetype=image/svg+xml"
        }, {
            test   : /\.gif$/,
            loader : "url-loader?mimetype=image/gif"
        }, {
            test  : /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: "url-loader?limit=10000&mimetype=application/font-woff"
        }, {
            test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader"
        }]
    }
};
