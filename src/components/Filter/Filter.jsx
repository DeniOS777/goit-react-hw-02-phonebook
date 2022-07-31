import React from 'react';

const Filter = ({ filter, onChange }) => {
  return (
    <>
      <p>Find contacts by name</p>
      <input
        type="text"
        name="filter"
        placeholder="Search contacts..."
        value={filter}
        onChange={onChange}
      />
    </>
  );
};

export default Filter;
