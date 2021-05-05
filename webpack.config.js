const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
//const ESLintPlugin = require('eslint-webpack-plugin');


module.exports = {
    //watch: true,
    devServer: {
        hot: true,
        inline: true,
        contentBase: "./src",
        port: 8080,
        progress: true,
        host: "192.168.1.166"
        //host: "web01.51yomo.com"
    },
    module: {
        rules: [
            {
                test: /\.less$/,
                exclude: "/node_modules/",
                use: ["style-loader", "css-loader", {loader: "less-loader", options: { lessOptions: {javascriptEnabled: true} }}]
            },
            {
                test: /\.s[ac]ss$/i,
                exclude: "/node_modules/",
                use: ["style-loader", "css-loader", "sass-lader"]
            },
            {
                test: /\.css$/,
                exclude: "/node_modules/",
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.js$/,
                include: path.resolve(__dirname, 'src'),
                exclude: "/node_modules/",
                use: ["babel-loader"]
            },
            {
                test: /(\.tsx|\.tx)$/,
                exclude: "/node_modules/",
                use: [{
                    loader: 'ts-loader',
                    options: {
                        transpileOnly: true,
                    }
                }]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin(
            {
                template: path.resolve(__dirname, "src", "index.html")
            }
        )
    ],
    entry: './src/index.tsx',
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    optimization: {
        removeAvailableModules: false,
        removeEmptyChunks: false,
        splitChunks: false,
        runtimeChunk: true
    }
};
