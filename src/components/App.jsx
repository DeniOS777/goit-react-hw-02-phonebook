import React, { Component } from 'react';
import { nanoid } from 'nanoid';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  inputNameId = nanoid();
  inputNumberId = nanoid();

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

  filterContacts = () => {
    const { contacts, filter } = this.state;
    const normalizeFilter = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizeFilter)
    );
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.addContact(this.state);
    this.resetForm();
  };

  resetForm = () => this.setState({ name: '', number: '', filter: '' });

  render() {
    const { contacts, filter, name, number } = this.state;
    const filteredContacts = this.filterContacts();

    return (
      <div style={{ padding: '10px' }}>
        <h1 style={{ marginBottom: '20px' }}>Phonebook</h1>
        <form
          onSubmit={this.handleSubmit}
          autoComplete="off"
          style={{
            display: 'inline-flex',
            flexDirection: 'column',
            marginBottom: '20px',
            padding: '20px',
            width: '350px',
            border: '1px solid #000',
          }}
        >
          <label style={{ marginBottom: '5px' }} htmlFor={this.inputNameId}>
            Name
          </label>
          <input
            style={{ marginBottom: '20px' }}
            id={this.inputNameId}
            placeholder="Enter contact..."
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <label style={{ marginBottom: '5px' }} htmlFor={this.inputNumberId}>
            Number
          </label>
          <input
            style={{ marginBottom: '20px' }}
            id={this.inputNumberId}
            placeholder="Enter number..."
            type="tel"
            name="number"
            value={number}
            onChange={this.handleChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <button type="submit">Add contact</button>
        </form>
        <h2>Contacts</h2>
        <p>Find contacts by name</p>
        <input
          type="text"
          name="filter"
          value={filter}
          onChange={this.handleChange}
        />
        {filteredContacts.map(({ id, name, number }) => (
          <li key={id}>
            {name}: {number}
            <button type="button">Delete</button>
          </li>
        ))}
      </div>
    );
  }
}

export default App;
