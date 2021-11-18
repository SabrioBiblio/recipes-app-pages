import React, { FC } from 'react'
import {IRecipe} from '../interface/interfaces'

import RecipeCardWishlist from '../components/RecipeCardWishlist/RecipeCardWishlist';

const Wishlist: FC = () => {
  const wishlist: IRecipe[] = JSON.parse(localStorage.getItem('wishlist')!) || [];

  if(wishlist.length === 0){
    return (
      <div className='container'>
        <h1>Empty wishlist</h1>
      </div>
    )
  }

  return (
    <div className='container d-flex d-flex-wrap'>
      {wishlist.map((recipe) => {
        return <RecipeCardWishlist recipe={recipe} key={recipe.idMeal}/>
      })}
    </div>
  )
}

export default Wishlist;
