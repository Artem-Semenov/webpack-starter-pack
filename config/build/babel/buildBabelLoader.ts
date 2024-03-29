import { removeDataTestIdBabelPlugin } from "./removeDataTestIdBabelPlugin";
import { BuildOptions } from "config/build/types";

export const buildBabelLoader = (options: BuildOptions) => {
  const isDev = options.mode === "development";
  const isProd = options.mode === "production";
  const plugins = [];

  if (isProd) {
    plugins.push([
      removeDataTestIdBabelPlugin,
      {
        props: ["data-testid"],
      },
    ]);
  }

  return {
    test: /\.tsx?$/,
    exclude: /node_modules/,
    use: {
      loader: "babel-loader",
      options: {
        presets: [
          "@babel/preset-env",
          "@babel/preset-typescript",
          ["@babel/preset-react", { runtime: isDev ? "automatic" : "classic" }],
        ],
        plugins: plugins.length ? plugins : undefined,
      },
    },
  };
};
