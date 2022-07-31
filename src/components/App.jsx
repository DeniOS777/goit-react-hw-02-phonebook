import React, { Component } from 'react';
import { nanoid } from 'nanoid';

class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  inputNameId = nanoid();

  addContact = name => {
    const newContact = {
      id: nanoid(),
      name,
    };

    this.setState(prevState => {
      return {
        contacts: [newContact, ...prevState.contacts],
      };
    });
  };

  handleChange = e => this.setState({ name: e.target.value });

  handleSubmit = e => {
    const { name } = this.state;
    e.preventDefault();
    this.addContact(name);
    this.resetForm();
  };

  resetForm = () => this.setState({ name: '' });

  render() {
    const { contacts, name } = this.state;

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
            width: '300px',
            border: '1px solid #000',
          }}
        >
          <label style={{ marginBottom: '5px' }} htmlFor={this.inputNameId}>
            Name
          </label>
          <input
            style={{ marginBottom: '15px' }}
            id={this.inputNameId}
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <button type="submit">Add contact</button>
        </form>
        <h2>Contacts</h2>
        {contacts.map(contact => (
          <li key={contact.id}>
            {contact.name}
            <button type="button">Delete</button>
          </li>
        ))}
      </div>
    );
  }
}

export default App;
