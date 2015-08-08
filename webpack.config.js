/**
 * User: Lior Elrom
 * Date: 08/08/15
 * Time: 1:14 PM
 */

var babelConfig = {
    optional: ['runtime', 'es6.spec.symbols']
};

module.exports = {
    entry: './modules/main.js',
    output: {
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            { test: /\.es\.js|jsx$/, loader: 'babel-loader', query: babelConfig },
            { test: /\.json$/, loader: 'json' },
            { test: /\.css$/, loader: 'style-loader!css-loader' },    // use ! to chain loaders
            { test: /\.scss$/, loader: 'style!css!sass' },
            { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192' } // inline base64 URLs for <=8k images, direct URLs for the rest
        ]
    }
};