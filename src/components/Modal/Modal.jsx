import React from 'react';
import PropTypes from 'prop-types';
import css from 'Index.module.css';

export const Modal = ({ largeImageUrl, onPress, onKeyDown, tags }) => {
  document.addEventListener('keydown', e => {
    if (e.keyCode === 27) {
      return onKeyDown();
    }
  });

  return (
    <div className={css.overlay} onClick={onPress}>
      <div className={css.modal}>
        <img src={largeImageUrl} alt={tags} className={css.largeImage}/>
        <p className={css.description}>{tags}</p>
      </div>
    </div>
  );
};

Modal.propTypes = {
  largeImageUrl: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  onKeyDown: PropTypes.func.isRequired,
};
