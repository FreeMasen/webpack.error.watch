/// <binding ProjectOpened='Watch - Development' />
"use strict";

const path = require("path");
const webpack = require("webpack");

module.exports = {
    entry: {
        vendor: [path.join(__dirname, "vendor.js")]
    },
    output: {
        path: path.join(__dirname, "dist"),
        filename: "dll.[name].js",
        library: "[name]"
    },
    plugins: [
        new webpack.DllPlugin({
            path: path.join(__dirname, "[name]-manifest.json"),
            name: "[name]",
            context: path.resolve(__dirname, "client")
        }),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin()
    ],
    resolve: {
        modules: ["node_modules"]
    }
};