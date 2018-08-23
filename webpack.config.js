const nodeExternals = require('webpack-node-externals');
const path = require('path');

module.exports = {
    target: 'node',
    externals: [
        nodeExternals(),
        {'react': 'React'},
        {'react-dom': 'ReactDOM'}
    ],
    entry: path.resolve(__dirname, './src/index.ts'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/dist/',
        filename: 'index.js',
        library: 'app',
        libraryTarget: 'commonjs2'
    },
    resolve: {
        extensions: ['.js', '.json', '.tsx', '.ts'],
        alias: {
            components: path.resolve(__dirname, '..', 'src/client')
        }
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'awesome-typescript-loader',
            },
            { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' },
            {
                test: /\.scss$/,
                loader: 'css-loader/locals'
            },
            {
                test: /\.(ttf|eot|otf|svg|png)$/,
                loader: 'file-loader?emitFile=false'
            },
            {
                test: /\.(woff|woff2)$/,
                loader: 'url-loader?emitFile=false'
            }
        ]
    },
    devtool: 'source-map'
}