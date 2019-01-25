module.exports = {
    mode: 'development',
    entry: './src/index.tsx',
    module: {
        rules: [
            {
                loader: 'ts-loader',
                test: /\.tsx?$/,
                exclude: [
                    /node_modules/
                ],
            },
        ]
    },
    devtool: 'inline-source-map',
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ]
    },
    output: {
        filename: 'bundle.js',
    }
};
