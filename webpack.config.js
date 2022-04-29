module.exports = {
    entry:'./frontend/src/index.js',
    output: {
        path: __dirname + '/frontend/public',
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                use: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            }
        ]
    },          
}