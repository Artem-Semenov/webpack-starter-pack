import { Configuration } from "webpack";
import { BuildOptions } from "./types";

export const buildREsolvers = (
  options: BuildOptions
): Configuration["resolve"] => {
  return {
    extensions: [".tsx", ".ts", ".js"],
  };
};
