import type { FC } from 'react'; 
import s from './Recipe.module.css'
import {ReactComponent as Heart} from '../images/heart.svg';
import {IRecipe} from '../interface/interfaces'

const Recipe: FC<IRecipe> = (props) => {
 
  const {
    strMealThumb,
    strMeal,
    strInstructions,
  } = props;

  return (
    <div className={s.recipeWrapper}>
      <div className={s.recipeImageWrapper}>
        <img src={strMealThumb} alt="" />
      </div>
      <h1>{strMeal}</h1>
      <p>{strInstructions}</p>
    </div>
  )
}

export default Recipe;