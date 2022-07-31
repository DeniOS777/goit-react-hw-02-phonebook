import React from 'react';
import { FilterLabel, InputSearch } from './Filter.styled';

const Filter = ({ filter, onChange }) => {
  return (
    <>
      <FilterLabel>Find contacts by name:</FilterLabel>
      <InputSearch
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
