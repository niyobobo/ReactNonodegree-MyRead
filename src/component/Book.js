import React from "react";
import PropTypes from "prop-types";
import FloatingButton from "./FloatingButton";

const Book = ({ book, onChange }) => {
  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 188,
            backgroundImage: `url(${
              book.imageLinks
                ? book.imageLinks.smallThumbnail
                : book.previewLink
            })`
          }}
        ></div>
        <FloatingButton
          selected={book.shelf ? book.shelf : "none"}
          handleChange={e => onChange(book, e.target.value)}
        />
      </div>
      <div className="book-title">{book.title}</div>
      <div className="book-authors">
        {book.authors ? (
          book.authors.map((author, index) => <span key={index}>{author}</span>)
        ) : (
          <span>No author</span>
        )}
      </div>
    </div>
  );
};

Book.propTypes = {
  onChange: PropTypes.func.isRequired,
  book: PropTypes.object.isRequired
};

export default Book;
