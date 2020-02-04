import React from "react";
import PropTypes from "prop-types";
import Book from "./Book";

const Bookshelf = ({ type, books, onChange }) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{type.title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.length === 0 ? (
            <div>
              You have no book in{" "}
              <span className="no-content">{type.title}</span> section
            </div>
          ) : (
            books.map(item => (
              <Book onChange={onChange} key={item.id} book={item} />
            ))
          )}
        </ol>
      </div>
    </div>
  );
};

Bookshelf.propTypes = {
  onChange: PropTypes.func.isRequired,
  books: PropTypes.array.isRequired,
  type: PropTypes.object.isRequired
};

export default Bookshelf;
