import React from 'react';

const Filter = ({ filter, onChange }) => {
  return (
    <span>
      <p>Find contacts by name</p>
      <input
        type="text"
        name="filter"
        placeholder="Search contacts..."
        value={filter}
        onChange={onChange}
      />
    </span>
  );
};

export default Filter;
