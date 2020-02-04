import React from "react";
import PropTypes from "prop-types";
import { shelfCategories } from "../utils/categories";

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

FloatingButton.propTypes = {
  handleChange: PropTypes.func.isRequired,
  selected: PropTypes.string.isRequired
};

export default FloatingButton;
