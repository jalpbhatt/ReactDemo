const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/index.js',
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.s?css$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }, { test: /\.(jpg|png|gif|svg|pdf|ico)$/, use: [{ loader: 'url-loader', options: { limit: 100000 }, },] }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Branch Visit App',
            template: './src/index.html'
        })
    ],
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: __dirname + '/dist',
        historyApiFallback: true
    }
}