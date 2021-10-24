const path = require("path");
const webpack = require("webpack");

module.exports = {
    resolve: {
        extensions: ['.js', '.ts']
    },
    entry: "./src/index.js",
   output: {
       path: path.resolve(__dirname, "./static/frontend"),
       filename: "[name].js",
   },
   module: {
       rules: [
           {
               test: /\.js$/,
               exclude: /node_modules/,
               use: {
                   loader: "babel-loader",
               },
           },
       ],
   },
   optimization: {
       minimize: true,
   },
   plugins: [
       new webpack.DefinePlugin({
           'process.env.APP_ENV' : JSON.stringify('production')
       })
   ]
}
