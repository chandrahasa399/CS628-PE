// server/routes/recipes.js
const express = require('express');
const router = express.Router();
const Recipe = require('../models/recipe');

// Define your routes (GET, POST, PUT, DELETE)
// Example:
router.get('/', async (req, res) => {
  try {
    const recipes = await Recipe.find();
    res.json(recipes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
