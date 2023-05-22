import React from 'react';
import PropTypes from 'prop-types';

import css from '../../Index.module.css';

export const ImageGalleryItem = ({ smallImageUrl, onPress, tags }) => {
  return (
    <li className={css.imagegalleryitem} onClick={onPress}>
      <img
        src={smallImageUrl}
        alt={tags}
        className={css.imagegalleryitemimage}
      ></img>
    </li>
  );
};

ImageGalleryItem.propTypes = {
  smallImageUrl: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  tags: PropTypes.string.isRequired,
};
