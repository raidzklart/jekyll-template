const path = require('path');
module.exports = {
        output: {
            path: path.resolve(__dirname, 'assets/js'),
            publicPath: '/assets/js/',
            filename: 'bundle.js'
        },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ["@babel/env"],
                        plugins: ["transform-class-properties"]
                    }
                }
            }
        ]
    }
};
