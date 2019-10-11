const path = require("path")
const common = require("./webpack.common")
const merge = require("webpack-merge")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const MiniCSSExtractPlugin = require("mini-css-extract-plugin")
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin")
const TerserPlugin = require("terser-webpack-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = merge(common, {
	mode: "production",
	output: {
		filename: "[name].[contentHash].bundle.js",
		path: path.resolve(__dirname, "dist")
	},
	optimization: {
		minimizer: [
			new OptimizeCssAssetsPlugin(), 
			new TerserPlugin(),
			new HtmlWebpackPlugin({
				template: "./src/template.html",
				minify: {
					removeAttributeQuotes: true,
					collapseWhitespace: false,  // true can affect bootstrap nav bar arrow spacing
					removeComments: true
				}
			})
		]
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
					MiniCSSExtractPlugin.loader, // 3. Extracts CSS as files
					"css-loader", // 2, Turns CSS into commonjs
					"sass-loader" // 1. Turns sass into CSS
				]
			}
		]
	}


})