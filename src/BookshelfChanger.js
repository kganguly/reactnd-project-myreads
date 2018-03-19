import React from 'react';
import PropTypes from 'prop-types';

const BookshelfChanger = props => (
  <div className="book-shelf-changer">
    <select onChange={(e) => props.onChangeShelf(props.book, e.target.value)} value={props.book.shelf || 'none'}>
      <option value="" disabled>Move to...</option>
      <option value="currentlyReading">Currently Reading</option>
      <option value="wantToRead">Want to Read</option>
      <option value="read">Read</option>
      <option value="none">None</option>
    </select>
  </div>
);

export default BookshelfChanger;