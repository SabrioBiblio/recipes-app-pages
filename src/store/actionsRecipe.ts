import {AppDispatch} from './store';
import {IRecipe} from '../interface/interfaces'

interface IPayload {
  recipe: IRecipe[];
}

export const getRecipe = () => {
  return (dispatch: AppDispatch) => {
    return fetch('https://www.themealdb.com/api/json/v1/1/random.php')
      .then((res) => res.json())
      .then((res) => dispatch(getRecipeSuccess(res)))
  }
}
const getRecipeSuccess = (payload: IPayload) => {
  return {
    type: 'SET_RECIPE',
    payload
  }
}

export const addToWishlist = (payload: IRecipe) => {
  return {
    type: 'ADD_TO_WISHLIST',
    payload
  }
}