import React from 'react';
import PropTypes from 'prop-types';
import BooksGrid from './BooksGrid';

const Bookshelf = props => {
  const { books, name, displayName } = props;
  let booksOnShelf = books.filter(book => book.shelf === name);

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{displayName}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          <BooksGrid books={booksOnShelf} onChangeShelf={props.onChangeShelf} />
        </ol>
      </div>
    </div>
  );
};

export default Bookshelf;