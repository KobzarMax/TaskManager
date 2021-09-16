const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    main: "./src/Core/index.js",
  },
  output: {
    filename: "[name].[hash].js",
    path: path.resolve(__dirname, "build"),
  },
  devServer : {
      port : 3000,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Application",
      template: "./src/index.html",
    }),
    new CleanWebpackPlugin(),
  ],
  module : {
      rules : [
        {
            test: /\.s[ac]ss$/i,
            use: [
              "style-loader",
              "css-loader",
              {
                loader: "sass-loader",
                options: {
                  // Prefer `dart-sass`
                  implementation: require.resolve("sass"),
                },
              },
            ],
          },
          {
            test: /\.(png|jpe?g|gif)$/i,
            use: [
              {
                loader: 'file-loader',
              },
            ],
          },

      ]
  }
};
