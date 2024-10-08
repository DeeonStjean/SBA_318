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
router
  .route("/:id")
  .get((req, res, next) => {
    const post = posts.find((u) => u.id == req.params.id);
    const links = [
        {
          href: `/${req.params.id}`,
          rel: "",
          type: "PATCH",
        },
        {
          href: `/${req.params.id}`,
          rel: "",
          type: "DELETE",
        },
      ];
  
      if (post) res.json({ post, links });
      else next();
});

module.exports = router;
