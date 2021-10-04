const express = require('express');
const morgan = require("morgan");
const { createProxyMiddleware } = require('http-proxy-middleware');

// Create Express Server
const app = express();

// Configuration
const PORT = 80;

var proxyTarget = ""

var proxy = createProxyMiddleware({
	target: proxyTarget,
	changeOrigin: true,
	// followRedirects: true,
	cache: false,
	ws: true,
})

// Logging
app.use(morgan('dev'));

// Proxy endpoints
app.use('/', proxy);

// Start Proxy
app.listen(PORT, HOST, () => {
	console.log(`Starting Proxy at ${PORT}`);
});