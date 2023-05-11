<<<<<<< HEAD
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
=======
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
>>>>>>> 48e295da04876d3c37de70d2bcdb1e079fc775d7
