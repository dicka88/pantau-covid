const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const AppManifestWebpackPlugin = require('app-manifest-webpack-plugin')
const WorkboxPlugin = require('workbox-webpack-plugin')

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
		}),
		new AppManifestWebpackPlugin({
	    logo: './src/images/favicon.png',
	    persistentCache: false,
	    inject: true,
	    config: {
	      appName: 'Pantau Covid19',
	      appDescription: 'untuk memantau penyebaran virus corona terutama di indonesia',
	      developerName: 'Dicka Ismaji',
	      developerURL: 'https://github.com/dicka88',
	      background: '#fff',
	      theme_color: '#fff',
	      display: 'standalone',
	      orientation: 'portrait',
	      start_url: '/index.html',
	      version: '1.0',
	      logging: false,
	      icons: {
	        android: true,
	        appleIcon: false,
	        appleStartup: false,
	        coast: { offset: 25 },
	        favicons: false,
	        firefox: false,
	        windows: false,
	        yandex: false,
	      },
	    }
		}),
		new WorkboxPlugin.GenerateSW({
			swDest: 'sw.js',
			clientsClaim: true,
			skipWaiting: true,
			runtimeCaching: [
				{
					urlPattern: new RegExp('https://covid19.mathdro.id'),
					handler: 'NetworkFirst'
				},
				{
					urlPattern: new RegExp('https://api.datacovid19.id'),
					handler: 'StaleWhileRevalidate'
				}
			]
		})
	]
}
