import React from 'react';
import css from '../../Index.module.css';

export const ImageGalleryItem = ({smallImageUrl, onPress}) => {
  return (
    <li className={css.imagegalleryitem} onClick={onPress}>
      <img
        src={smallImageUrl}
        alt=""
        className={css.imagegalleryitemimage}
      ></img>
    </li>
  );
};
