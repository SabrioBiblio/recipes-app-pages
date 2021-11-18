import React, {FC, useState} from 'react'
import {useDispatch} from 'react-redux';
import {addToWishlist} from '../../store/actionsRecipe';
import {IRecipe} from '../../interface/interfaces';
import {wishlistHandler} from '../../common/utils';

import s from './AddRecipeForm.module.css'

const AddRecipeForm: FC = () => {
  const [titleRecipe, updateTitleRecipe] = useState('');
  const [descriptionRecipe, updateDescriptionRecipe] = useState('');
  const [formValidate, updateFormValidate] = useState('');

  let recipe: IRecipe = {
    strMeal: titleRecipe,
    strArea: '',
    strCategory: '',
    strInstructions: descriptionRecipe,
    strMealThumb: '',
    idMeal: Math.floor(Math.random() * 999999).toString(),
    strTags: ''
  }
  const dispatch = useDispatch();

  return (
    <>
    <h2>Add custom recipe</h2>
    <form onSubmit={
      (e) => {
        e.preventDefault();
        if(titleRecipe.length <= 5 || descriptionRecipe.length <= 5){
          updateFormValidate('Title and description might have length more than 5 symbols');
          return;
        }
        updateTitleRecipe('');
        updateDescriptionRecipe('');
        dispatch(addToWishlist(recipe));
        wishlistHandler(recipe);
        updateFormValidate('Your recipe has been added to favorite');
      }
      }>
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
      <div className={s.formValidate}>{formValidate}</div>
    </form>
    </>
  )
}

export default AddRecipeForm;
