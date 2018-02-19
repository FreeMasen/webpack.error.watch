/// <binding />
"use strict";

const path = require("path");
const webpack = require("webpack");

module.exports =  {
    entry: {
        JobReview: "./src/app.tsx"
    },
    output: {
        path: path.join(__dirname, "dist"),
        filename: "[name].min.js"
    },
    cache:true,
    devtool: 'cheap-eval-source-map',
    devServer: {
        contentBase: ".",
        host: "localhost",
        port: 9000
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx']
    },
    plugins: [
        new webpack.AutomaticPrefetchPlugin()
        ,new webpack.DllReferencePlugin({
            context: path.join(__dirname, "src"),
            manifest: require("./vendor-manifest.json")
        })
        , new webpack.optimize.OccurrenceOrderPlugin()
        ,
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env']
                    }
                }
            },
            {
                test: /\.css$/,
                include: [/node_modules/, path.join(__dirname, "./lib/css")],
                use: [
                    {
                        loader: 'style-loader'
                    }, 
                    {
                        loader: 'css-loader'
                    }
                ],
            },
            {
                test: /\.tsx?$/,
                use: {
                    loader: "awesome-typescript-loader",
                    options: {
                        useCache: true,
                        silent: true,
                    }
                },
                include: [path.join(__dirname, "./src")],
            }
        ]
    }
};