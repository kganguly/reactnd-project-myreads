import React from 'react';
import { Route } from 'react-router-dom';
import ListBooks from './ListBooks';
import SearchBooks from './SearchBooks';
import * as BooksAPI from './BooksAPI';
import './App.css';

class BooksApp extends React.Component {
  state = {
    books: []
  };

  componentDidMount() {
    this.getBooks();
  }

  getBooks() {
    BooksAPI.getAll().then(
      books => {
        this.setState({ books });
        console.log(books);
      }
    );
  }

  changeShelf = (changedBook, newShelf) => {
    this.setState(previousState => {
      const newBooks = [...previousState.books];
      const found = newBooks.find(book => book.id === changedBook.id);
      if (found) {
        found.shelf = newShelf;
      } else {
        changedBook.shelf = newShelf;
        newBooks.push(changedBook);
      }
      return { books: newBooks };
    });

    BooksAPI.update(changedBook, newShelf);
  }

  render() {
    return (
      <div className="app">
        <Route path="/search" render={props => (
          <SearchBooks books={this.state.books} onChangeShelf={this.changeShelf} />
        )} />
        <Route exact path="/" render={props => (
          <ListBooks books={this.state.books} onChangeShelf={this.changeShelf} />
        )} />
      </div>
    )
  }
}

export default BooksApp
