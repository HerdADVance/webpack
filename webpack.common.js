const path = require("path")
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	entry: {
		main: "./src/index.js",
		vendor: "./src/vendor.js"
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
			},
			{
				test: /\.html$/,
				use: ["html-loader"]
			},
			{
				test: /\.(svg|png|jpg|gif)$/,
				use: {
					loader: "file-loader",
					options: {
						name: "[name].[hash].[ext]",
						outputPath: "imgs" //can also set compressions here
					}
				}
			}
		]
	}

}