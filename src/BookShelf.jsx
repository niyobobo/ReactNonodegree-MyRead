import React from "react";
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

export default Bookshelf;
