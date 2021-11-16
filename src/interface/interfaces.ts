export interface IRecipe {
  strMeal: string;
  strTags: string;
  strMealThumb: string;
  strCategory: string;
  strArea: string;
  strInstructions: string;
  idMeal: string;
  [key: string]: string;
}
export interface IState {
  recipe: IRecipe[];
  wishlist: IRecipe[];
}

export interface IWishlist {
  recipe: IRecipe;
}