import React from 'react'
import type { FC } from 'react';
import s from './Modal.module.css';

interface IModal {
  isOpen: boolean;
  setIsOpen(b: boolean): void;
  children: JSX.Element;
}

const Modal: FC<IModal> = ({ children, isOpen, setIsOpen }) => {

  const closeModal = () => {
    setIsOpen(false);
  }

  return (
    <>
      <div
      onClick={closeModal}
      className={`${s.modalWrapper} ${isOpen && s.isOpen}`}>
        { children }
      </div>
    </>
  )
}

export default Modal
