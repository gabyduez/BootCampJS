const path = require("path");

module.exports = {
    entry: "./scr/index.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname,"dist"),
        publicPath: ""
    },
    mode: "production",
    module:{
        rules:[
            {
                use: "babel-loader",
                test: /.js$/,
                exclude: /node_modules/
            }
        ]
    }
}