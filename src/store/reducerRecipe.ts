import {IRecipe} from '../interface/interfaces'

interface IStateRecipe {
  recipe?: any[];
  wishlist?: IRecipe[];
}

interface IActionRecipe { 
  type: string;
  payload?: any;
}

const initialState: IStateRecipe = {
  recipe: [],
  wishlist: [],
}

const getRecipe = (state: IStateRecipe  = initialState, action: IActionRecipe) => {
  switch (action.type){
    case 'SET_RECIPE':
      return {recipe: action.payload.meals}
    case 'ADD_TO_WISHLIST':
      return {...state, wishlist: {...state.wishlist, ...action.payload}}
    default: 
      return state;
  }
}

export default getRecipe;