const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

/**
 * @type {import("webpack").Configuration}
 */

module.exports = {
  context: path.resolve(__dirname, "src"),
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    watchFiles: [
      "src/**/*.tsx",
      "src/**/*.ts",
      "src/**/*.css",
      "src/**/*.png",
      "src/**/*.html",
      "appconfig.json",
      "appconfig.prod.json",
    ],
    liveReload: true,
    hot: true,
    port: 5173,
  },
  entry: {
    main: "./index.tsx",
  },
  plugins: [
    new HtmlWebpackPlugin({ template: "./index.html", filename: "index.html" }),
    new CopyWebpackPlugin({
      patterns: [{ from: "./appconfig.prod.json", to: "./" }],
    }),
    new CopyWebpackPlugin({
      patterns: [{ from: "./appconfig.json", to: "./" }],
    }),
  ],
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "/dist/",
    filename: "main.js",
  },
  devtool: false,
  mode: "development",
  externals: ["sharp", "canvas", "electron/common"],
  resolve: {
    extensions: [".wasm", ".tsx", ".ts", ".mjs", ".jsx", ".js", ".css", ".png"],
  },

  module: {
    rules: [
      {
        test: /\.(js|ts|tsx)$/i,
        include: path.resolve(__dirname, "src"),
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.(png|jpg|jpeg|gif|webp|data)$/,
        type: "asset/resource",
        generator: { filename: "[base]" },
      },
      {
        test: /\.(html|json)$/,
        exclude: path.resolve(__dirname, "src/index.html"),
        type: "asset/resource",
        generator: { filename: "[base]" },
      },
      {
        test: /appconfig\.json$/,
        type: "asset/resource",
        generator: { filename: "[base]" },
      },
      { test: /\.tsx?$/, loader: "ts-loader" },
      {
        test: /\.css$/,
        exclude: /node_modules\/(?!@mantine)/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              importLoaders: 2,
              // 0 => no loaders (default);
              // 1 => postcss-loader;
              // 2 => postcss-loader, sass-loader
            },
          },
          "postcss-loader",
        ],
      },
      {
        test: /\.module\.css\@mantine$/,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.module\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.data\.png$/,
        loader: "alt1/imagedata-loader",
        type: "javascript/auto",
      },
      { test: /\.fontmeta.json/, loader: "alt1/font-loader" },
    ],
  },
};
