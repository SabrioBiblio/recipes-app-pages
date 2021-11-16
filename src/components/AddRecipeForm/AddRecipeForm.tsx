import React, {FC, useState} from 'react'

import s from './AddRecipeForm.module.css'

const AddRecipeForm: FC = () => {

  const [titleRecipe, updateTitleRecipe] = useState('');
  const [descriptionRecipe, updateDescriptionRecipe] = useState('');

  return (
    <>
    <h2>Add custom recipe</h2>
    <form onSubmit={(e) => e.preventDefault()}>
      <input
        className={s.inputTitle}
        onChange={(e) => updateTitleRecipe(e.target.value)}
        type="text"
        value={titleRecipe}
        placeholder="Recipe title"
      />
      <textarea
        className={s.textDescription}
        onChange={(e) => updateDescriptionRecipe(e.target.value)}
        value={descriptionRecipe}
        placeholder="Recipe instruction"
      />
      <button className={s.buttonAddRecipe} type='submit'>Create recipe</button>
    </form>
    </>
  )
}

export default AddRecipeForm;
