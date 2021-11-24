module.exports = {
  devServer: {
    host: "127.0.0.1",
    port: 8888,
    https: false,
  },
  runtimeCompiler: true,
  publicPath: "./",
  outputDir: "dist",
  chainWebpack: (config) => {
    config.plugin("html").tap((args) => {
      args[0].title = "web22";
      args[0].minify = false;
      return args;
    });
  },
};
