import React from 'react';
import ContactItem from '../ContactItem';

import { ContactsList } from './ContactList.styled';

const ContactList = ({ filteredContacts, onDeleteContact }) => {
  return (
    <ContactsList>
      {filteredContacts.map(({ id, name, number }) => (
        <ContactItem
          key={id}
          id={id}
          name={name}
          number={number}
          onDeleteContact={onDeleteContact}
        />
      ))}
    </ContactsList>
  );
};

export default ContactList;
