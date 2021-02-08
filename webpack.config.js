module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  entry: {
    app: "./app.js",
    home: "./home.js",
    success: "./success.js",
  },
  output: {
    filename: "[name].js",
  },
  devServer: {
    hot: true,
  },
};
