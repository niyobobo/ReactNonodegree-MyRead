import React from "react";
import { shelfCategories } from "./utils/categories";

const FloatingButton = ({ selected, handleChange }) => {
  return (
    <div className="book-shelf-changer">
      <select value={selected} onChange={handleChange}>
        <option value="move" disabled>
          Move to...
        </option>
        {shelfCategories.map(({ value, title }) => (
          <option key={value} value={value}>
            {title}
          </option>
        ))}
        <option value="none">None</option>
      </select>
    </div>
  );
};

export default FloatingButton;
