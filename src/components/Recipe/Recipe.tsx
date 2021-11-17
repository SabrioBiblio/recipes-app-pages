import React, {useState} from 'react'
import type { FC } from 'react'; 
import {useDispatch, useSelector} from "react-redux";
import {getRecipe, addToWishlist} from '../../store/actionsRecipe';
import {IState} from '../../interface/interfaces'
import {wishlistHandler} from '../../common/utils';

import s from './Recipe.module.css'
import {ReactComponent as Heart} from '../../images/heart.svg';
import imagePlaceholder from '../../images/image_placeholder.jpg'
import Spinner from '../Spinner/Spinner';

const Recipe: FC = () => {
  const dispatch = useDispatch();
  const [stateInstruction, setInstructionState] = useState(false);
  const [stateIngredients, setIngredientsState] = useState(false);

  let recipeTagsEl: JSX.Element[] = [];
  let recipeIngredients: JSX.Element[] = [];

  const recipe = useSelector((state: IState) => state.recipe)

  if(recipe.length === 0){
    return (
        <Spinner/>
    )
  }

  const {
    strMeal,
    strTags,
    strMealThumb,
    strCategory,
    strArea,
    strInstructions,
  } = recipe[0];
  
  for(let i: number = 1; i <= 20; i++){
    if(recipe[0][`strIngredient${i}`]){
      recipeIngredients.push(<p 
          key={recipe[0][`strIngredient${i}`]}
        >{recipe[0][`strIngredient${i}`] + ': ' + recipe[0][`strMeasure${i}`]}
        </p>)
    }
  }

  if(strTags){
    const recipeTags = strTags.split(',');
    recipeTagsEl = recipeTags.map((tag: string) => {
      return <span key={tag} className={s.recipeTag}>
          {tag}
        </span>
    })
  }

  return (
    <div className={s.recipeWrapper}>
      <div className={s.recipeHead}>
        <h1>{strMeal}</h1>
        <div className={s.recipeHeadWishlist}>
          <Heart className
          ={s.recipeHeadHeart}
          onClick={() => {
            dispatch(addToWishlist(recipe[0]));
            wishlistHandler(recipe[0]);
          }}/>
        </div>
      </div>
      <div className={s.recipeMain}>
        <div className={s.recipeMainProps}>
            { !!strTags &&
              <>
                <h4>Tags:</h4>
                <div className={s.recipeMainTags}>
                  {recipeTagsEl}
                </div>
              </>
            }
            <h4>Category: <span>{strCategory}</span></h4>
            <h4>Area: <span>{strArea}</span></h4>
            <div
              onClick={() => setIngredientsState(!stateIngredients)}
              className={`${s.recipeMainIngredients} ${stateIngredients ? s.uncovered : s.covered}`}>
              <h4>Ingredients:</h4>
              {recipeIngredients}
            </div>
        </div>
        <div className={s.recipeMainImage}>
          <img src={strMealThumb ?  strMealThumb : imagePlaceholder} alt="" />
        </div>
      </div>
      <div
      className={`${s.recipeInstruction} ${stateInstruction? s.uncovered : s.covered}`}
      onClick={() => setInstructionState(!stateInstruction)}
      >
        <h2>Instruction</h2>
        <p>{strInstructions}</p>
      </div>
      <button
        className={s.recipeRandom}
        onClick={() => dispatch(getRecipe())}
      >Next recipe</button>
    </div>
  )
}

export default Recipe;