const mongoose = require("mongoose");
const Meal = require("../model/meal");
const Category = require("../model/category");
const _ = require("lodash");

exports.create_meal = (req, res) => {
  const meal = new Meal({
    _id: new mongoose.Types.ObjectId(),
    ...req.body,
  });
  meal.save();
  res.json(meal);
};

exports.create_cate = (req, res) => {
  const cate = new Category({
    _id: new mongoose.Types.ObjectId(),
    ...req.body,
  });
  cate.save();
  res.json(cate);
};

exports.getCategories = async (req, res) => {
  var query = {};
 
  if (req.params.category_id != 'all') {
    query._id = req.params.category_id;
  }
  console.log(query)
  let cates = await Category.find(query);
  console.log(cates)
  var result = await Promise.all(
    _.map(cates, async (cate) => {
      let currMeals = await getMealsHelper({ category: cate._id });
      return _.assignInWith(
        { meals: currMeals },
        { _id: cate._id, name: cate.name, image: cate.image }
      );
    })
  );
  res.send(result);
};

exports.getMeals = async (req, res) => {
  var query = {};
  var options = {};
  if (req.query.category_id) {
    query.category = req.query.category_id;
  }
  let meals = await getMealsHelper(query);

  res.send(meals);
};

const getMealsHelper = async (query = {}) => {
  console.log(query);
  let meals = [];
  try {
    meals = await Meal.find(query);
  } catch (e) {
    res.status(400).json({ error: err });
  }

  return meals;
};

exports.getMeal = (req, res) => {
  Meal.findById(req.params.id)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(400).json({ error: err });
    });
};
