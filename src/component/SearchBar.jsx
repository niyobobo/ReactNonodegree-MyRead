import React from "react";
import { Link } from "react-router-dom";
import { DebounceInput } from "react-debounce-input";

const SearchBar = ({ backTo, onInputChange, inputValue }) => {
  return (
    <div className="search-books-bar">
      <Link className="close-search" to={backTo}>
        Close
      </Link>
      <div className="search-books-input-wrapper">
        <DebounceInput
          type="text"
          name="query"
          value={inputValue}
          debounceTimeout={500}
          onChange={onInputChange}
          placeholder="Search by title or author"
        />
      </div>
    </div>
  );
};

export default SearchBar;
