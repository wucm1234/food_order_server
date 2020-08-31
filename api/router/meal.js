const express = require("express");
const router = express.Router();
const MealController = require("../controller/meal");


router.post("/category", MealController.create_cate);
router.get("/category/:category_id", MealController.getCategories);

router.post("/", MealController.create_meal);
router.get("/:id", MealController.getMeal);
router.get("/", MealController.getMeals);

module.exports = router;
