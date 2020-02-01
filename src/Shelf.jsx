import React from "react";
import Book from "./Book";

const Shelf = props => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">Currently Reading</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {[0, 1].map(item => (
            <Book />
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Shelf;
