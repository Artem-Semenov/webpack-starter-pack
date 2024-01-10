import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import webpack, { Configuration } from "webpack";
import { BuildOptions } from "./types";

export const buildPlugins = (
  options: BuildOptions
): Configuration["plugins"] => {
  const { mode, paths } = options;

  const isDev = mode === "development";
  const isProd = mode === "production";

  const plugins: Configuration["plugins"] = [
    new HtmlWebpackPlugin({
      template: paths.html,
      filename: "index.html",
      inject: "head",
    }),
  ];

  if (isDev) {
    plugins.push(
      //slow
      new webpack.ProgressPlugin()
    );
  }

  if (isProd) {
    plugins.push(
      new MiniCssExtractPlugin({
        filename: "css/[name].[contenthash].css",
        chunkFilename: "css/[name].[contenthash].css",
      })
    );
  }

  return plugins.filter(Boolean);
};
