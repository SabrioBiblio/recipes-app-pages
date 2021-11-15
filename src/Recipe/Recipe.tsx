import React, {useEffect, useState} from 'react'
import type { FC } from 'react'; 
import {useDispatch, useSelector} from "react-redux";
import {getRecipe, addToWishlist} from '../store/actionsRecipe';
import s from './Recipe.module.css'
import {ReactComponent as Heart} from '../images/heart.svg';
import {IRecipe, IState} from '../interface/interfaces'

const Recipe: FC = () => {
  const [stateInstruction, setInstructionState] = useState(false);
  const [stateIngredients, setIngredientsState] = useState(false);

  const dispatch = useDispatch();
  let recipeTagsEl: JSX.Element[] = [];
  let recipeIngredients: JSX.Element[] = [];

  useEffect(() => {
    dispatch(getRecipe());
  }, []);

  const recipe = useSelector((state: IState) => state.recipe)

  console.log(recipe)
  if(recipe.length === 0){
    return <div></div>
  }

  const wishlistHandler = () => {
    let oldStorage: IRecipe[] = JSON.parse(localStorage.getItem('wishlist') || '[]');
    let hasRecipe = oldStorage.filter((rec) => rec.idMeal === recipe[0].idMeal)
    
    if(hasRecipe.length === 0){
      localStorage.setItem('wishlist', JSON.stringify([...oldStorage, recipe[0]]));
    }else{
      const newStorage = oldStorage.filter((rec) => rec.idMeal !== recipe[0].idMeal)
      localStorage.setItem('wishlist', JSON.stringify(newStorage));
    }
    dispatch(addToWishlist(recipe[0]))
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
      recipeIngredients.push(<p>{recipe[0][`strIngredient${i}`] + ': ' + recipe[0][`strMeasure${i}`]}</p>)
    }
  }

  if(strTags){
    const recipeTags = strTags.split(',');
    recipeTagsEl = recipeTags.map((tag: string) => {
      return <span className={s.recipeTag}>
          {tag}
        </span>
    })
  }
  return (
    <div className={s.recipeWrapper}>
      <div className={s.recipeHead}>
        <h1>{strMeal}</h1>
        <div className={s.recipeHeadWishlist}>
          <Heart className={s.recipeHeadHeart}
          onClick={wishlistHandler}/>
        </div>
      </div>
      <div className={s.recipeMain}>
        <div className={s.recipeMainProps}>
            {strTags ?
            <>
            <h4>Tags:</h4>
            <div className={s.recipeMainTags}>
              {recipeTagsEl}
            </div>
            </>
            : null}
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
          <img src={strMealThumb} alt="" />
        </div>
      </div>
      <div
      className={`${s.recipeInstruction} ${stateInstruction ? s.uncovered : s.covered}`}
      onClick={() => setInstructionState(!stateInstruction)}
      >
        <h2>Instruction</h2>
        <p>{strInstructions}</p>
      </div>
      <button onClick={() => dispatch(getRecipe())}>Next recipe</button>
    </div>
  )
}

export default Recipe;