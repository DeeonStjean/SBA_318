const express = require("express");
const router = express.Router();

const comments = require("../data/commets");

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

    res.json({ comments, links });
});

module.exports = router;