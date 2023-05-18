import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { Watch } from 'react-loader-spinner';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Button } from 'components/Button/Button';
import { Modal } from 'components/Modal/Modal';
import css from '../../Index.module.css';
import { fetchImagesByQuery } from 'components/Api/Api';

export class ImageGallery extends Component {
  state = {
    images: [],
    isLoading: false,
    error: null,
    page: null,
    isModal: false,
    largeImg: null,
  };

  openModal = url => {
    this.setState({
      isModal: true,
      largeImg: url,
    });
  };

  closeModal = () => {
    this.setState({
      isModal: false,
      largeImg: null,
    });
  };

  loadMore = async () => {
    this.setState(prevState => ({
      isLoading: true,
      page: prevState.page + 1,
    }));

    const { page } = this.state;

    try {
      const images = await fetchImagesByQuery(localStorage.query, page);
      this.setState(prevState => ({
        images: [...prevState.images, ...images],
      }));
    } catch (error) {
      this.setState({ error });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  async componentDidMount() {
    this.setState({
      isLoading: true,
      page: 2,
    });

    const { page } = this.state;

    try {
      const images = await fetchImagesByQuery(localStorage.query, page);
      images.length
        ? this.setState({
            images: [...images],
          })
        : this.setState({
            error: {
              message: 'Images not found',
            },
          });
    } catch (error) {
      this.setState({ error });
    } finally {
      this.setState({ isLoading: false });
    }
  }

  render() {
    const { isLoading, error, images, isModal, largeImg } = this.state;
    return isLoading ? (
      <Watch />
    ) : error ? (
      <p>Whoops, something went wrong: {error.message}</p>
    ) : isModal ? (
      <Modal largeImageUrl={largeImg} onPress={() => this.closeModal()} />
    ) : (
      <div className={css.mainsection}>
        <ul className={css.imagegallery}>
          {images.map(i => (
            <ImageGalleryItem
              key={nanoid()}
              smallImageUrl={i.previewURL}
              onPress={() => this.openModal(i.largeImageURL)}
            />
          ))}
        </ul>
        <Button onButton={this.loadMore} />
      </div>
    );
  }
}
