import React, { Component } from 'react';
import axios from 'axios';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import css from '../../Index.module.css';

export class ImageGallery extends Component {
  state = {
    images: [],
  };

  async componentDidMount() {
    const response = await axios.get(
      `https://pixabay.com/api/?q=${localStorage.query}}&page=1&key=34267096-8e89032011ab6ec20673badb0&image_type=photo&orientation=horizontal&per_page=12`
    );
    this.setState({ images: response.data.hits });
  }
  render() {
    return (
      <ul className={css.imagegallery}>
        {this.state.images.map(i => (
          <ImageGalleryItem imageGallerySrc={i.previewURL} />
        ))}
      </ul>
    );
  }
}
