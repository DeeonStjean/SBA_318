const express = require("express");
const router = express.Router();

const posts = require("../data/posts");

router
  .route("/")
  .get((req, res) => {
    const links = [
      {
        href: "posts/:id",
        rel: ":id",
        type: "GET",
      },
    ];

    res.json({ posts, links });
});

module.exports = router;
