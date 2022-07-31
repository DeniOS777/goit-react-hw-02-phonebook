import React from 'react';

import { ContactsItem, ContactName, ContactDelete } from './ContactItem.styled';

const ContactItem = ({ id, name, number, onDelete }) => {
  return (
    <ContactsItem>
      <ContactName>
        {name}: <a href="tel:">{number}</a>
      </ContactName>
      <ContactDelete onClick={() => onDelete(id)} type="button">
        Delete
      </ContactDelete>
    </ContactsItem>
  );
};

export default ContactItem;
