module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "./" : "/",
  // outputDir: "www",
  productionSourceMap: false,
  devServer: {
    proxy: {
      "/api": {
        target: process.env.VUE_APP_BaseApi,
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          "^/api": ""
        }
      }
    }
  }
};
