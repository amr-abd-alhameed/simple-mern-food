const express = require("express");
const router = express.Router();
const Recipe = require("../models/recipeSchema");

router
  .post("/", async (req, res) => {
    const { title, ingredients, instructions } = req.body;
    if (!title || !ingredients || !instructions) {
      return res.status(400).json({ error: "All fields are required" });
    }
    //create new recipe in database
    const NewRecipe = await Recipe.create({
      title,
      ingredients,
      instructions,
    });
    res.status(200).json(NewRecipe);
  })
  .get("/", async (req, res) => {
    try {
      const recipes = await Recipe.find();
      res.status(200).json(recipes);
    } catch (error) {
      console.log(error), res.status(500).json({ error: "server error" });
    }
  })
  .get("/:id", async (req, res) => {
    const id = req.params.id;
    try {
      const specificRecipe = await Recipe.findById(id);
      if (!specificRecipe) {
        return res
          .status(404)
          .json({ message: "there is no data with this id" });
      }
      res.status(200).json(specificRecipe);
    } catch (error) {
      res.status(500).json({ error: "server error" });
    }
  })
  .put("/:id", async (req, res) => {
    const id = req.params.id;
    const { title, ingredients, instructions } = req.body;
    try {
      const updatedRecipe = await Recipe.findByIdAndUpdate(
        id,
        {
          title,
          ingredients,
          instructions,
        },
        { new: true, runValidators: true }
      );
      if (!updatedRecipe) {
        return res.status(404).json({ error: "Recipe is no found" });
      }
      res.status(201).json(updatedRecipe);
    } catch (error) {
      res.status(500).json({ error: "server Error" });
    }
  })
  .delete("/:id", async (req, res) => {
    const id = req.params.id;
    try {
      const deletedRecipe = await Recipe.findByIdAndDelete(id);
      if (!deletedRecipe) {
        return res.status(404).json({ error: "Recipe is no found" });
      }
      res.status(201).json({ message: "deleted Successfully" });
    } catch (error) {
      res.status(500).json({ error: "server Error" });
    }
  });

module.exports = router;
