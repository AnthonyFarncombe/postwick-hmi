module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/hmi/" : "/",
  devServer: {
    proxy: {
      "^/(api|socket.io)": {
        target: "http://localhost:3000"
      }
    }
  }
};
