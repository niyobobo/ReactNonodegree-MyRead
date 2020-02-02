import React from "react";
import { Link } from "react-router-dom";
import BookShelf from "./BookShelf";
import loader from "./icons/loader.svg";
import { shelfCategories } from "./utils/categories";

const Shelf = ({ allBooks, loading, onChange }) => {
  return (
    <div>
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        {loading ? (
          <div>
            <img className="loading" src={loader} alt="loader" />
          </div>
        ) : (
          <div>
            <div className="list-books-content">
              {shelfCategories.map(category => (
                <BookShelf
                  onChange={onChange}
                  key={category.value}
                  type={category}
                  books={allBooks.filter(book => book.shelf === category.value)}
                />
              ))}
            </div>
            <Link className="open-search" to={`/search`}>
              Add a book
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Shelf;
