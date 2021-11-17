import {IRecipe} from "../interface/interfaces"

export const update = <T,P>(oldObject: T, updatedProperties: P) => { 
  return { ...oldObject, ...updatedProperties } 
}

export const wishlistHandler = (recipe: IRecipe) => {
  let oldStorage: IRecipe[] = JSON.parse(localStorage.getItem('wishlist') || '[]');
  let hasRecipe = oldStorage.filter((rec) => rec.idMeal === recipe.idMeal)
  
  if(hasRecipe.length === 0){
    localStorage.setItem('wishlist', JSON.stringify([...oldStorage, recipe]));
  }else{
    const newStorage = oldStorage.filter((rec) => rec.idMeal !== recipe.idMeal)
    localStorage.setItem('wishlist', JSON.stringify(newStorage));
  }
}