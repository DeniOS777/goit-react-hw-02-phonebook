import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm';
import ContactList from './ContactList';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = ({ name, number }) => {
    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    this.setState(prevState => ({
      contacts: [newContact, ...prevState.contacts],
    }));
  };

  filteringContacts = () => {
    const { contacts, filter } = this.state;
    const normalizeFilter = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizeFilter)
    );
  };

  render() {
    const { filter } = this.state;
    const filteredContacts = this.filteringContacts();

    return (
      <div style={{ padding: '10px' }}>
        <h1 style={{ marginBottom: '20px' }}>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />

        <h2>Contacts</h2>
        <p>Find contacts by name</p>
        <input
          type="text"
          name="filter"
          value={filter}
          onChange={this.handleChange}
        />
        <ContactList filteredContacts={filteredContacts} />
      </div>
    );
  }
}

export default App;
