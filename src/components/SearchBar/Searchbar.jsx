import React, { Component } from 'react';
import css from '../../Index.module.css';
export class Searchbar extends Component {
  makeGallery = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    const searchedImages = form.elements.query.value;
    localStorage.query = searchedImages;
  };
  render() {
    return (
      <header className={css.searchbar}>
        <form className={css.searchform} onSubmit={this.makeGallery}>
          <button type="submit" className={css.searchformbutton}>
            <span className={css.searchformbuttonlabel}>Search</span>
          </button>
          <input
            name="query"
            type="text"
            className={css.searchforminput}
            autoComplete="off"
            autoFocus
            placeholder="Search image and photos"
            id="search-input"
          ></input>
        </form>
      </header>
    );
  }
}
