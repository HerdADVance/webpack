const path = require("path")
const common = require("./webpack.common")
const merge = require("webpack-merge")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const MiniCSSExtractPlugin = require("mini-css-extract-plugin")

module.exports = merge(common, {
	mode: "production",
	output: {
		filename: "[name].[contentHash].bundle.js",
		path: path.resolve(__dirname, "dist")
	},
	plugins: [
		new MiniCSSExtractPlugin({ filename: "[name].[contentHash].css" }),
		new CleanWebpackPlugin(),
	],
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: [
					MiniCSSExtractPlugin.loader, // 3. Extracts CSS into files
					"css-loader", // 2, Turns CSS into commonjs
					"sass-loader" // 1. Turns sass into CSS
				]
			}
		]
	}


})