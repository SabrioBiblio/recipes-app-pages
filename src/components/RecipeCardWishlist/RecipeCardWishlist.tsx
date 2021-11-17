import type { FC } from 'react'; 
import {IWishlist} from '../../interface/interfaces'

import imagePlaceholder from '../../images/image_placeholder.jpg'
import s from './RecipeCardWishlist.module.css'

const RecipeCardWishlist: FC<IWishlist> = (props) => {

  const {
    strInstructions,
    strMeal,
    strMealThumb,
  } = props.recipe;
  

  return (
    <div className={s.wishlistCardWrapper}>
      <div>
        <img src={strMealThumb ? strMealThumb : imagePlaceholder} alt="" />
      </div>
      <div className={s.wishlistCardDescription}>
        <h1 className={s.wishlistCardTitle}>{strMeal}</h1>
        <p>{strInstructions.slice(0, 220)}...</p>
      </div>
    </div>
  )
}

export default RecipeCardWishlist;