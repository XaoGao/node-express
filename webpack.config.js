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
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    "style-loader",
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader",
                ],
            },
        ],
    }
}
