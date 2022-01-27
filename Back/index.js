const express = require("express");
const { ClientRequest } = require("http");
const app = express();
const https = require('https');
var postProductHuntEntity =  require("./models/postProductHuntEntity");
const { debuglog } = require("util");
const service = require("./services/postProductHuntService")
const test = require("./repository/postProductRepository")

app.listen(3000, () => console.log("server is started in port 3000"));

service.postProductHuntService();
test.postProductRepository();


