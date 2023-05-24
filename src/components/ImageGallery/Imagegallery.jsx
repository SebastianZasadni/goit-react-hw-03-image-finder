import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import Notiflix from 'notiflix';
import PropTypes from 'prop-types';

import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Loader } from 'components/Loader/Loader';
import { Button } from 'components/Button/Button';
import { Modal } from 'components/Modal/Modal';
import css from '../../Index.module.css';
import { fetchImages } from 'api/api';

export class ImageGallery extends Component {
  static defaultProps = {
    images: [],
    query: null,
    isLoading: false,
    error: null,
    page: null,
    isModal: false,
    largeImg: null,
    tags: null,
  };

  state = {
    images: this.props.images,
    query: this.props.query,
    isLoading: this.props.isLoading,
    error: this.props.error,
    page: this.props.page,
    isModal: this.props.isModal,
    largeImg: this.props.largeImg,
    tags: this.props.tags,
  };

  async componentDidMount() {
    localStorage.query
      ? this.setState({
          isLoading: true,
          page: 2,
          query: localStorage.query,
        })
      : (localStorage.query = null);

    const { page } = this.state;

    try {
      const newData = await fetchImages(localStorage.query, page);
      localStorage.clear();
      newData.length
        ? this.setState({
            images: [...newData],
          })
        : this.setState({
            error: {
              message: 'Images not found',
            },
          });
    } catch (error) {
      this.setState({ error: error });
    } finally {
      this.setState({ isLoading: false });
    }
  }

  openModal = (url, tags) => {
    this.setState({
      isModal: true,
      largeImg: url,
      tags: tags,
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

    const { query, page } = this.state;

    try {
      const newData = await fetchImages(query, page);
      this.setState(prevState => ({
        images: [...prevState.images, ...newData],
      }));
    } catch (error) {
      this.setState({ error });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  render() {
    const { isLoading, error, images, isModal, largeImg, tags } = this.state;
    return isLoading ? (
      <Loader />
    ) : error ? (
      Notiflix.Notify.failure(`Whoops, something went wrong: ${error.message}`)
    ) : isModal ? (
      <Modal
        largeImageUrl={largeImg}
        onPress={() => this.closeModal()}
        onEscDown={() => this.closeModal()}
        tags={tags}
      />
    ) : (
      <div
        className={css.mainSection}
        tabIndex="0"
        onKeyDown={e => console.log(e.key)}
      >
        <ul className={css.imageGallery}>
          {images.map(i => (
            <ImageGalleryItem
              key={nanoid()}
              smallImageUrl={i.previewURL}
              onPress={() => this.openModal(i.largeImageURL, i.tags)}
              tags={i.tags}
            />
          ))}
        </ul>
        <Button onButton={this.loadMore} />
      </div>
    );
  }
}

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      previewURL: PropTypes.string,
      largeImageURL: PropTypes.string,
      id: PropTypes.string,
    })
  ),
  isLoading: PropTypes.bool.isRequired,
  error: PropTypes.string,
  page: PropTypes.number,
  isModal: PropTypes.bool.isRequired,
  largeImg: PropTypes.string,
};
