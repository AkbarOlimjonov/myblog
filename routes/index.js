const express = require("express");
const router = express.Router();
const Category = require("../model/category");
const Article = require("../model/article");

/* GET home page. */
router.get("/", async function (req, res, next) {
  const categories = await Category.find();
  const articles = await Article.find();
  const categoryId = articles.categoryId
  const category = await Category.findOne({id:categoryId})
  console.log(category.name)
  res.render("index", { title: "IT-blog",categories,articles,categoryName: category.name });
  
});



module.exports = router;
