const path = require("path")

module.exports = {
    mode: "development",
    entry: {
        bundle: "./src/javascript/index.js"
    },

    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "public"),
        clean: true
    },

    devtool: "source-map",

    // module: {
    //     rules: [
    //         {
    //             test: /\.js$/,
    //             exclude: [
    //                 /node_modules/
    //             ],
    //             use: [
    //                 { loader: "babel-loader" }
    //             ]
    //         }
    //     ]
    // }
}
