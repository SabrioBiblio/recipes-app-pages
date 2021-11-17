import React from 'react'
import type { FC } from 'react';

import Recipe from '../components/Recipe/Recipe';;

const RandomRecipe: FC = () => {
  return (
    <div className='container d-flex d-flex-wrap'>
      <Recipe/>
    </div>
  )
}

export default RandomRecipe;