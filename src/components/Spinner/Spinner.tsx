import React, { FC } from 'react';

import spinner from '../../images/spinner.svg'
import s from './Spinner.module.css';

const Spinner: FC = () => {
  return (
    <div className={s.spinner}>
      <img src={spinner} alt="" />
    </div>
  );
}

export default Spinner;