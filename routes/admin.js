const express = require("express");
const Category = require("../model/category");
const router = express.Router();

/* GET home page. */

router.get("/create/article", function (req, res, next) {
  res.render("createArticle", { title: "Barcha maqolalar" });
});

router.get("/create/category", function (req, res, next) {
  res.render("createCategory", { title: "Barcha maqolalar" });
});


router.post("/create/category", async function (req, res, next) {
  const { name } = req.body;

  const category = new Category({
    name,
  });

  await category.save();

  res.redirect("/all");
});

module.exports = router;
