var webpack = require('webpack');

module.exports = {
	entry: './src/js/index.js',
	output: {
		path: __dirname + "/www/js",
		filename: 'index.js'
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					'style-loader',
					'css-loader'
				]
			},
			{
				test: /\.s[ac]ss$/,
				use: [
					'style-loader',
					'css-loader',
					'sass-loader'
				]
			},
			{
				test: /\.vue$/,
				loader: 'vue-loader',
				options: {
					loaders: {
						scss: 'vue-style-loader!css-loader!sass-loader', // <style lang="scss">
						sass: 'vue-style-loader!css-loader!sass-loader?indentedSyntax' // <style lang="sass">
			    }
			  }
			}
		]
	},
	resolve: {
	    alias: {vue: 'vue/dist/vue.js'}
	},
	plugins: [
		
	]

}

if(process.env.NODE_ENV === 'production'){
	module.exports.plugins.push(
		new webpack.optimize.UglifyJsPlugin()
	);
}