
var app = require("../app");
var debug = require("debug")("express-20210628:server");
var http = require("http");
var https = require('https')
var fs  = require('fs')

/**
 * Get port from environment and store in Express.
 */
  const httpsOption = {
    key : fs.readFileSync(__dirname + "/sheli.net.cn.key"),  // 后面的半段改为自己的证书位置
    cert: fs.readFileSync(__dirname + "/sheli.net.cn.pem")
}

var port = normalizePort(process.env.PORT || "3011");
app.set("port", port);
app.set("host", "10.206.0.5");

/**
 * Create HTTP server.
 */

var server = https.createServer(httpsOption,app)