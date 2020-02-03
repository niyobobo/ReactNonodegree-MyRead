import React, { Component } from "react";
import Book from "./Book";
import Loader from "./component/Loader";
import SearchBar from "./component/SearchBar";

class Search extends Component {
  state = {
    query: ""
  };

  handleSearch = e => {
    const { value: query } = e.target;
    this.setState({ query });
    query && this.props.onSearch(query);
  };

  render() {
    const { searchResults, loading } = this.props;
    const { query } = this.state;
    return (
      <div className="search-books">
        <SearchBar
          backTo="/"
          inputValue={query}
          onInputChange={this.handleSearch}
        />
        <div className="search-books-results">
          {query && loading ? (
            <Loader />
          ) : (
            <ol className="books-grid">
              {query && searchResults.length ? (
                searchResults.map(book => (
                  <Book
                    key={book.id}
                    book={book}
                    onChange={this.props.onChange}
                  />
                ))
              ) : (
                <div>No books</div>
              )}
            </ol>
          )}
        </div>
      </div>
    );
  }
}

export default Search;
