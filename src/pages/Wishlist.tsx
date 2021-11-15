import React, { FC } from 'react'
import { useSelector } from 'react-redux'
import {IState} from '../interface/interfaces'

import RecipeCardWishlist from '../RecipeCardWishlist/RecipeCardWishlist'

const Wishlist: FC = () => {
  const wishlist = useSelector((state: IState) => state.wishlist)

  return (
    <div>
      {wishlist.map((recipe) => {
        return <RecipeCardWishlist recipe={recipe[0]}/>
      })}
    </div>
  )
}

export default Wishlist
