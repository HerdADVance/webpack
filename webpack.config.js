const path = require("path")
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	mode: "development",
	entry: "./src/index.js",
	output: {
		filename: "main.[contentHash].js",
		path: path.resolve(__dirname, "dist")
	},
	plugins: [new HtmlWebpackPlugin({
		template: "./src/template.html"
	})],
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: [
					"style-loader", // 3. Injects styles into DOM
					"css-loader", // 2, Turns CSS into commonjs
					"sass-loader" // 1. Turns sass into CSS
				]
			}
		]
	}

}