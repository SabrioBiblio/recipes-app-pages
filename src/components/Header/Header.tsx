import React, {FC} from 'react'
import {Link} from 'react-router-dom';

import s from './Header.module.css'

interface IHeader {
  setIsOpen(b: boolean): void;
}

const Header: FC<IHeader> = ({ setIsOpen }) => {
  return (
    <header>
      <div className={s.headerWrapper}>
        <ul className={s.headerLink}>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/favorite'>Favorite</Link></li>
        </ul>
        <button className={s.btnAddRecipe} onClick={() => setIsOpen(true)}>Add new recipe</button>
      </div>
    </header>
  )
}

export default Header;