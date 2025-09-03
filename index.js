const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");

const app = express();

// Replace the URL below with your Firebase app URL
app.use(
  "/",
  createProxyMiddleware({
    target: "https://studio--keybind-icon-display.us-central1.hosted.app",
    changeOrigin: true,
    secure: true,
  })
);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Proxy running on port ${port}`);
});
