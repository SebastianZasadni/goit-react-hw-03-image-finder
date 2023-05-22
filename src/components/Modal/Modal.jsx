import React from 'react';
import PropTypes from 'prop-types';
import css from 'Index.module.css';

export const Modal = ({ largeImageUrl, onPress, onEscDown, tags }) => {
  document.addEventListener('keydown', e =>
    e.keyCode === 27 ? onEscDown() : null
  );

  return (
    <div className={css.overlay} onClick={onPress}>
      <div className={css.modal}>
        <img src={largeImageUrl} alt={tags} className={css.largeImage} />
        <p className={css.description}>{tags}</p>
      </div>
    </div>
  );
};

Modal.propTypes = {
  largeImageUrl: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  onEscDown: PropTypes.func.isRequired,
  tags: PropTypes.string.isRequired
};
