import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './RecipeDetails.css';
function RecipeList() {
  const [recipes, setRecipes] = useState([]);
  const backUrl = 'http://localhost:5003/';
  useEffect(() => {
    axios.get(backUrl+'/api/recipes')
      .then(response => setRecipes(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="recipe-list-container">
    <h2 className="recipe-list-heading">Recipe List</h2>
    <ul className="recipe-list">
      {recipes.map(recipe => (
        <li key={recipe._id} className="recipe-list-item">
          <Link to={`/recipes/${recipe._id}`} className="recipe-link">{recipe.name}</Link>
        </li>
      ))}
    </ul>
    <Link to="/add" className="add-recipe-link">Add Recipe</Link>
  </div>
  );
}

export default RecipeList;