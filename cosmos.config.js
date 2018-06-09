module.exports = {
  containerQuerySelector: "#root",
  webpackConfigPath: "webpack.config.dev.js",
  publicPath: "public",
  // Optional: Create this file when you begin adding proxies
  proxiesPath: "src/cosmos.proxies",
  globalImports: ["./src/index.css"]
};
