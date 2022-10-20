const express = require("express");
const Category = require("../model/category");
const Article = require("../model/article");
const router = express.Router();
const {Types} = require('mongoose')


router.get("/create/article", async function (req, res, next) {
  const categories = await Category.find()
  res.render("createArticle", { title: "Yangi maqola",categories });
});

router.get("/create/category", function (req, res, next) {
  res.render("createCategory", { title: "Yangi kategoriya" });
});


router.post("/create/article", async function (req, res, next) {
  const { name,paragraf,categoryId } = req.body;


  const article = new Article({
    name,
    paragraf,
    categoryId: Types.ObjectId(categoryId),

  });

  await article.save();

  res.redirect("/");
});

router.post("/create/category", async function (req, res, next) {
  const { name } = req.body;

  const category = new Category({
    name,
  });

  await category.save();

  res.redirect("/");
});

module.exports = router;
