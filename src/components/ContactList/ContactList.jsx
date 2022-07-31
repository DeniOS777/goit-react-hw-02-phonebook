import React from 'react';
import ContactItem from '../ContactItem';

const ContactList = ({ filteredContacts, onDelete }) => {
  return (
    <ul>
      {filteredContacts.map(({ id, name, number }) => (
        <ContactItem
          key={id}
          id={id}
          name={name}
          number={number}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
};

export default ContactList;
