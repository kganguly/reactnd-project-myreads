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
    BooksAPI.getAll().then(
      books => {
        this.setState({ books });
        console.log(books);
      }
    );
  }

  render() {
    return (
      <div className="app">
        <Route path="/search" render={props => (
          <SearchBooks books={this.state.books} />
        )} />
        <Route exact path="/" render={props => (
          <ListBooks books={this.state.books} />
        )} />
      </div>
    )
  }
}

export default BooksApp
