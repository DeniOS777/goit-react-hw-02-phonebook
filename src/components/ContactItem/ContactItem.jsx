import React from 'react';

import { ContactsItem, ContactName, ContactDelete } from './ContactItem.styled';

const ContactItem = ({ id, name, number, onDeleteContact }) => {
  return (
    <ContactsItem>
      <ContactName>
        {name}: <a href="tel:">{number}</a>
      </ContactName>
      <ContactDelete onClick={() => onDeleteContact(id)} type="button">
        Delete
      </ContactDelete>
    </ContactsItem>
  );
};

export default ContactItem;
