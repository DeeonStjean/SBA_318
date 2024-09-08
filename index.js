const express = require("express");
const app = express();
const port = 3000;
/*so basically have 3 different arrays that 
holds 3 different stuff, 
for example users, posts, comments */

// creating middleware
const logReq = function (req, res, next) {
    console.log("Request Received");
    next();
};

const logReq2 = function (req, res, next) {
    console.log("Request Received");
    next();
};