import path from "path"
import HtmlWebpackPlugin from "html-webpack-plugin"

module.exports = {
  mode: "development",
  devServer: {
    port: 8181,
    inline: true,
		historyApiFallback: true
  },
  
  entry: {
    index: "./src/index.tsx"
  },
  output: {
    publicPath: "/",
    filename: "js/[name].js",
    chunkFilename: "js/[name].js",
    path: path.resolve(__dirname, "dist/js")
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "ts-loader"
        }
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: [
      ".jsx", ".js", ".ts", ".tsx"
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "模板",
      hash: false,
      filename: "index.html",
      template: "./index.html"
    })
  ]
}