import React from "react";

const RecipeExcerpt = ({ recipe, handleSelectRecipe }) => {
  return (
    <article key={recipe.id} className='recipe-card'>
      <figure>
        <img src={recipe.image_url} alt={recipe.name} />
      </figure>
      <h2>{recipe.title}</h2>
      <p className='flex-spacing'>Description: {recipe.description}</p>
      <button onClick={() => handleSelectRecipe(recipe)}>View</button>
    </article>
  );
};

export default RecipeExcerpt;
