import React from 'react';

import css from '../../Index.module.css';

export const Searchbar = () => {
  const handleSubmit = evt => {
    const form = evt.currentTarget;
    const searchedImages = form.elements.query.value;
    localStorage.query = searchedImages;
    form.reset();
  };

  return (
    <header className={css.searchbar}>
      <form className={css.searchform} onSubmit={handleSubmit}>
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
};
