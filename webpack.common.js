const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: "./src/app.js",
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					{
						loader: 'style-loader'
					},
					{
						loader: 'css-loader'
					}
				]
			},
			{
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader',
					{
						loader: 'image-webpack-loader',
						options: {
							optipng: {
		           enabled: false,
		         },
		         pngquant: {
		           quality: [0.65, 0.90],
		           speed: 2
		         },
			      },
					}
        ],
			},
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader',
        ]
      }
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			favicon: './src/images/favicon.png',
			template: './src/index.html',
			filename: 'index.html'
		})
	]
}
