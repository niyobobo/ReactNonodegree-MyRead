import React from "react";
import { Link } from "react-router-dom";
import BookShelf from "./BookShelf";
import { shelfCategories } from "./utils/categories";
import Loader from "./component/Loader";

const Shelf = ({ allBooks, loading, onChange }) => {
  return (
    <div>
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        {loading ? (
          <Loader />
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
