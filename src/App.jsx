import React, { Component } from "react";
import { Route } from "react-router-dom";
import Search from "./Search";
import * as BooksAPI from "./utils/BooksAPI";
import "./App.css";
import Shelf from "./Shelf";

class BooksApp extends Component {
  state = {
    books: [],
    loading: true,
    searchResults: []
  };

  componentDidMount() {
    BooksAPI.getAll().then(books =>
      this.setState({
        books,
        loading: false
      })
    );
  }

  updateBookShelf = (book, shelf) => {
    if (shelf !== "none") {
      BooksAPI.update(book, shelf);
      return this.setState(prevState => ({
        books: prevState.books.map(element =>
          element.id === book.id ? { ...element, shelf } : element
        )
      }));
    }
  };

  searchBooks = query => {
    this.setState({ loading: true });
    BooksAPI.search(query).then(searchResults =>
      this.setState({
        searchResults,
        loading: false
      })
    );
  };

  render() {
    return (
      <div className="app">
        <Route
          exact
          path="/"
          render={() => (
            <Shelf
              loading={this.state.loading}
              onChange={this.updateBookShelf}
              allBooks={this.state.books}
            />
          )}
        />
        <Route
          path="/search"
          render={() => (
            <Search
              loading={this.state.loading}
              onChange={this.updateBookShelf}
              onSearch={this.searchBooks}
              searchResults={this.state.searchResults}
            />
          )}
        />
      </div>
    );
  }
}

export default BooksApp;
