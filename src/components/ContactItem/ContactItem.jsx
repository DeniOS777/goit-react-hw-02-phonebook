import React from 'react';

const ContactItem = ({ id, name, number, onDelete }) => {
  return (
    <li>
      {name}: {number}
      <button onClick={() => onDelete(id)} type="button">
        Delete
      </button>
    </li>
  );
};

export default ContactItem;
