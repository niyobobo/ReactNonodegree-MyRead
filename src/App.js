import React, { Component } from "react";
import { Route } from "react-router-dom";
import * as BooksAPI from "./utils/BooksAPI";
import "./App.css";
import Shelf from "./views/Shelf";
import Search from "./views/Search";

class BooksApp extends Component {
  state = {
    books: [],
    loading: true,
    searchResults: []
  };

  /**
   * @description Life cycle method to that perform certain action
   *              after a component mounted to the DOM
   *
   * TASK: Fetch list of books from API
   */
  componentDidMount() {
    this.getBooks();
  }

  /**
   * @description Get all books and update state
   */
  getBooks = () => {
    BooksAPI.getAll().then(books =>
      this.setState({
        books,
        loading: false
      })
    );
  };

  /**
   * @description Updating shelf when select option changed
   * @param { object } book Book to be updated
   * @param { string } shelf new shelf where book will be located
   * @return { object } update the state with new data.
   */
  updateBookShelf = (book, shelf) => {
    if (shelf !== "none") {
      BooksAPI.update(book, shelf);
      this.verifyFromSearch(book, shelf);
      return this.setState(prevState => ({
        books: prevState.books.map(element =>
          element.id === book.id ? { ...element, shelf } : element
        )
      }));
    }
  };

  /**
   * @description Verify if update comes from search page and add new book
   *              into the state.
   * @param { object } book a book to be updated
   * @param { string } shelf new shelf where the book will be located
   * @returns { object } updated state if request comes from search page
   */
  verifyFromSearch = (book, shelf) => {
    const { books } = this.state;
    const data = books.find(e => e.id === book.id);
    if (!data)
      return this.setState(prevState => ({
        books: prevState.books.concat({ ...book, shelf })
      }));
  };

  /**
   * @description Search books based on user input query
   * @param { string } query user provided search keyword
   */
  searchBooks = query => {
    this.setState({ loading: true });
    BooksAPI.search(query).then(books =>
      this.setState({
        searchResults: this.updateSearchResult(books),
        loading: false
      })
    );
  };

  /**
   * @description Merge two arrays in order to get a current shelf of a book which
   *              is shown on the main page
   * @param { Array } searchResults search result
   * @return { Array } An updated array with each book and its current shelf
   */
  updateSearchResult = results => {
    const { books } = this.state;
    const { error } = results;
    return (
      !error &&
      results.map(element => {
        const data = books.find(book => book.id === element.id);
        return data ? data : element;
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
