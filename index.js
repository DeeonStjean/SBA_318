const express = require("express");

//const users = require("./data/users");
//const posts = require("./data/posts");
//const comments= require("./data/commets");

const users = require("./routes/users");
const posts = require("./routes/posts");
const comments = require("./routes/comments");

const app = express();
const port = 3000;

// creating middleware
const logReq = function (req, res, next) {
    console.log("Request Received");
    next();
};

const logReq2 = function (req, res, next) {
    console.log("Request Received");
    next();
};


app.get("/", (req, res) => {
    res.send("Work in progress!");
});

// Use our Routes
app.use("/users", users);
app.use("/posts", posts);
app.use("/comments",comments);


// error handler
app.use((req, res) => {
    res.status(404);
    res.json({ error: "Resource Not Found" });
});

app.listen(port, () => {
    console.log(`Server listening on port: ${port}.`);
});