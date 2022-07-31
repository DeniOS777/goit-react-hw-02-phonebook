import React from 'react';
import ContactItem from '../ContactItem';

const ContactList = ({ filteredContacts, onDeleteContact }) => {
  return (
    <ul>
      {filteredContacts.map(({ id, name, number }) => (
        <ContactItem
          key={id}
          id={id}
          name={name}
          number={number}
          onDelete={onDeleteContact}
        />
      ))}
    </ul>
  );
};

export default ContactList;
