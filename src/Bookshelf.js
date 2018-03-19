import React from 'react';
// import PropTypes from 'prop-types';
import BooksGrid from './BooksGrid';
import sortBy from 'sort-by';

const Bookshelf = props => {
  const { books, name, displayName, onChangeShelf } = props;
  const booksOnShelf = books.filter(book => book.shelf === name);

  booksOnShelf.sort(sortBy('title'));

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{displayName}</h2>
      <div className="bookshelf-books">
        <BooksGrid books={booksOnShelf} onChangeShelf={onChangeShelf} />
      </div>
    </div>
  );
};

export default Bookshelf;