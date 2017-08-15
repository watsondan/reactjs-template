//webpack.config.js

const path = require('path')

const config = {
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            }
        ],
        loaders: [{
                test: /\.css$/, loader: "style-loader!css-loader"
            }
        ]
    }
}

module.exports = config
