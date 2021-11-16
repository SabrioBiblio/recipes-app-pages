import React, { useState, useEffect } from 'react'
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
      <div className={`${s.modalWrapper} ${isOpen && s.isOpen}`}>
        { children }
      </div>
      <div 
        className={`${s.modalBackdrop} 
        ${isOpen && s.isOpen}`}
        onClick={closeModal}
      ></div>
    </>
  )
}

export default Modal
