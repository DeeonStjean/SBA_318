const express = require("express");
const app = express();
const port = 3000;


//const users = require("./data/users");
//const posts = require("./data/posts");
const comments= require("./data/commets");

const users = require("./routes/users");
const posts = require("./routes/posts");

// creating middleware
const logReq = function (req, res, next) {
    console.log("Request Received");
    next();
};

const logReq2 = function (req, res, next) {
    console.log("Request Received");
    next();
};

// error handler
app.use((req, res) => {
    res.status(404);
    res.json({ error: "Resource Not Found" });
});


// Use our Routes
app.use("/api/users", users);
app.use("/api/posts", posts);

app.get("/", (req, res) => {
    res.send("Work in progress!");
});

app.listen(port, () => {
    console.log(`Server listening on port: ${port}.`);
});