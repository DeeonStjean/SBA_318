const express = require("express");

//const users = require("./data/users");
//const posts = require("./data/posts");
//const comments= require("./data/commets");

const users = require("./routes/users");
const posts = require("./routes/posts");
const comments = require("./routes/comments");

const app = express();
const port = 3000;

// serve static files from the styles directory
app.use(express.static("./styles"));

// require the filesystem module
const fs = require("fs");
// define the template engine
app.engine("pages", (filePath, options, callback) => {
    fs.readFile(filePath, (err, content) => {
        if (err) return callback(err);
        // Here, we take the content of the template file,
        // convert it to a string, and replace sections of
        // it with the values being passed to the engine.
        const rendered = content
        .toString()
        .replaceAll("#title#", `${options.title}`)
        .replace("#content#", `${options.content}`)
        .replace("#info#", `${options.info}`);
        return callback(null, rendered);
    });
});

app.set("views", "./views"); // specify the views directory
app.set("view engine", "pages"); // register the template engine

app.get("/", (req,res) => {
    const options = {
        title: "Homepage",
        content: "Welcome to the users Database!", 
        info: "testing my knowledge on express server application",
    };
    res.render("index", options);
});

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