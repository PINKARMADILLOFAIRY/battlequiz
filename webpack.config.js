const path = require('path'); 

module.exports = {
    entry: './client/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
    },
    mode: process.env.NODE_ENV || 'development',
    module: {
        rules: [
            {
                test: /\.jsx?/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                    }
                }
            },
            {
                test: /\.s[ac]ss$/i,
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader', 'sass-loader',],
            },
        ]
    },
    devServer: {
        port: 8080,
        publicPath: '/build',
        proxy: {
            '/games/**': 'http://localhost:3000',
            '/players/**': 'http://localhost:3000',
        },
        hot: true,
    }
}