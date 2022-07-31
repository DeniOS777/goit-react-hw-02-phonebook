import React from 'react';

const ContactItem = ({ name, number }) => {
  return (
    <li>
      {name}: {number}
      <button type="button">Delete</button>
    </li>
  );
};

export default ContactItem;
