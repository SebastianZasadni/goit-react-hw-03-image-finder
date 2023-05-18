import React from 'react';
import css from 'Index.module.css';

export const Modal = ({ largeImageUrl, onPress }) => {
  return (
    <div className={css.overlay} onClick={onPress}>
      <div className={css.modal}>
        <img src={largeImageUrl} alt='alt'/>
      </div>
    </div>
  );
};
