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
    <header className={css.searchBar}>
      <form className={css.searchForm} onSubmit={handleSubmit}>
        <button type="submit" className={css.searchFormButton}>
          <span className={css.searchFormButtonLabel}>Search</span>
        </button>
        <input
          name="query"
          type="text"
          className={css.searchFormInput}
          autoComplete="off"
          autoFocus
          placeholder="Search image and photos"
          id="search-input"
        />
      </form>
    </header>
  );
};
