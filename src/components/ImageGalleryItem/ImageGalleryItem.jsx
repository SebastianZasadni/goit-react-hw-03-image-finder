import css from '../../Index.module.css';
export const ImageGalleryItem = imageGallerySrc => {
  return (
    <li className={css.imagegalleryitem}>
      <img
        src={imageGallerySrc.imageGallerySrc}
        alt=""
        className={css.imagegalleryitemimage}
      ></img>
    </li>
  );
};
