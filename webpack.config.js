const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');


// JS file handler
const javascript = {
  test: /\.(js)$/,
  use: [{
    loader: 'babel-loader',
    options: { presets: ['env'] }
  }],
};

// postCSS loader
const postcss = {
  loader: 'postcss-loader',
  options: {
    sourceMap: true,
    plugins() { return [autoprefixer({ browsers: 'last 3 versions' })]; }
  }
};

// sass/css loader
const styles = {
  test: /\.(scss)$/,
  use: ExtractTextPlugin.extract(['css-loader?sourceMap', postcss, 'sass-loader?sourceMap'])
};

// compress JS
const uglify = new webpack.optimize.UglifyJsPlugin({ // eslint-disable-line
  compress: { warnings: false }
});

// font awesome
const fontAwesome =        {
  test: /.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
  use: [{
    loader: 'file-loader',
    options: {
      name: '[name].[ext]',
      outputPath: 'fonts/',    // where the fonts will go
    }
  }]
};

// Expose jQuery to the global window object
const expose = {
  test: require.resolve('jquery'),
  use: [
    {
      loader: 'expose-loader',
      options: 'jQuery'
    },
    {
      loader: 'expose-loader',
      options: '$'
    }
  ]
};

// bundle everything
const config = {
  entry: {
    app: './public/javascript/app.js'
  },
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, 'public', 'dist'),
    filename: '[name].bundle.js'
  },
  module: {
    rules: [expose, javascript, styles, fontAwesome]
  },
  plugins: [
    new ExtractTextPlugin('style.css'),
    uglify
  ]
};


process.noDeprecation = true;

module.exports = config;
