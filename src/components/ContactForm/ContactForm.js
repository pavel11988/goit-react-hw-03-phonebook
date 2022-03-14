import React, { Component } from 'react';

import { Form, Label, Name, Telephone, Button } from './ContactForm.styled';

class ContactForm extends Component {
  state = {
    name: '',
    tel: '',
  };

  handleChangeName = e => {
    this.setState({ name: e.currentTarget.value });
  };

  handleChangeTel = e => {
    this.setState({ tel: e.currentTarget.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    if (this.state.name.trim() === '' || this.state.tel.trim() === '') {
      alert('Warning! Please enter correct data! ');
      return;
    }
    this.props.onSubmit(this.state);
    this.setState({
      name: '',
      tel: '',
    });
    e.target.reset();
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Label>
          Name:
          <Name
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            onChange={this.handleChangeName}
            required
          />
        </Label>
        <Label>
          Tel:
          <Telephone
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            onChange={this.handleChangeTel}
            required
          />
        </Label>
        <Button type="submit">Add contact</Button>
      </Form>
    );
  }
}

export default ContactForm;
