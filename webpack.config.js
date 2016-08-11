var ExtractTextPlugin = require('extract-text-webpack-plugin');
var webpack = require('webpack');
var path = require('path');
var ngTemplateLoader = (
    'ngtemplate?relativeTo=' + path.resolve(__dirname, 'assets/templates/') +
    '!html' + "!slm"
);

// set paths for neat, bourbon
var sassNeatPaths = require("node-neat").with([
    path.resolve(__dirname, "./assets/styles")
  ]).map(function(neatPath) {
    return "includePaths[]=" + neatPath;
}).join("&");

module.exports = {
    entry: ["./src/main.js", "./assets/styles/main.scss"],
    output: {
        path: __dirname + "/build/",
        filename: "main.js",
        publicPath: "/build/"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" },
            { test: /\.jsx?$/, exclude: /(node_modules|bower_components)/, loader: 'babel' },
            { test: /\.html$/, loaders: ["html"] },
            { test: /\.css$/, loader: ExtractTextPlugin.extract('css') },
            { test: /\.scss$/, loader: ExtractTextPlugin.extract('css?sourceMap!sass?sourceMap&' + sassNeatPaths) },
            { test: /\.jpg$/, loader: "file?name=images/[name].[ext]" },
            { test: /\.png$/, loader: "file?name=images/[name].[ext]" },
            { test: /\.html\.(slm|slim)$/, loader: ngTemplateLoader },
            { test: /\.json$/, loaders: ["json"] },
            { test: /\.(yml|yaml)$/, loaders: ["json", "yaml"] },
            { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/font-woff" },
            { test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/font-woff" },
            { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream" },
            { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file" },
            { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml" }
        ]
    },
    plugins: [
        new ExtractTextPlugin('[name].css', {
            allChunks: true
        }),
        new webpack.ProvidePlugin({
          $: "jquery",
          jQuery: "jquery"
        })
    ]
};
