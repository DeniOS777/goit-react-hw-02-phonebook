import React, { Component } from 'react';
import { nanoid } from 'nanoid';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  inputNameId = nanoid();
  inputNumberId = nanoid();

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.resetForm();
  };

  resetForm = () => this.setState({ name: '', number: '' });

  render() {
    const { name, number } = this.state;
    return (
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
    );
  }
}

export default ContactForm;
