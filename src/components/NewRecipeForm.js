import React from "react";

const NewRecipeForm = ({ newRecipe, handleNewRecipe, onUpdateForm, hideRecipeForm }) => {
  return (
    <div className='recipe-details'>
      <div className='recipe-form'>
        <h2>New Recipe</h2>
        <button className='cancel-button' onClick={hideRecipeForm}>
          Cancel
        </button>

        <form onSubmit={(e) => handleNewRecipe(e, newRecipe)}>
          <label htmlFor='title'>Title</label>
          <input id='title' type='text' name='title' value={newRecipe.title} onChange={(e) => onUpdateForm(e, "new")} required />

          <label htmlFor='ingredients'>Ingredients</label>
          <textarea
            id='ingredients'
            name='ingredients'
            value={newRecipe.ingredients}
            onChange={(e) => onUpdateForm(e, "new")}
            required
            placeholder='Add ingredients separated by commas - i.e. Flour, sugar, almonds'
          />

          <label htmlFor='instructions'>Instructions</label>
          <textarea id="instructions" name='instructions' value={newRecipe.instructions} onChange={(e) => onUpdateForm(e, "new")} required />

          <label htmlFor='description'>Description</label>
          <textarea id="description" name='description' value={newRecipe.description} onChange={(e) => onUpdateForm(e, "new")} required />

          <label htmlFor="image">Image</label>
          <input id="image" type='text' name='image_url' value={newRecipe.image_url} onChange={(e) => onUpdateForm(e, "new")} required />

          <label htmlFor='servings'>Servings</label>
          <input id='servings' type='number' name='servings' value={newRecipe.servings} onChange={(e) => onUpdateForm(e, "new")} required />

          <button type='submit'>Save Recipe</button>
        </form>
      </div>
    </div>
  );
};

export default NewRecipeForm;
