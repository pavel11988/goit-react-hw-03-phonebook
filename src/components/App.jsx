import React, { Component } from 'react';

import shortid from 'shortid';

import { Container } from './Container/Containet.styled';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    console.log('App: componentDidMount');

    const storageContacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(storageContacts);

    if (parsedContacts) {
      this.setState({
        contacts: parsedContacts,
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('App: componentDidUpdate');

    if (this.state.contacts !== prevState.contacts) {
      console.log('Обновились контакты');

      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  checkDuplicateContact = checkName => {
    const { contacts } = this.state;
    const definedNames = contacts.map(contact => contact.name);
    return definedNames.includes(checkName);
  };

  addContact = ({ name, tel }) => {
    if (!this.checkDuplicateContact(name) || name.length <= 1) {
      const contact = {
        id: shortid.generate(),
        name: name,
        tel: tel,
      };

      this.setState(prevState => ({
        contacts: [contact, ...prevState.contacts],
      }));
    } else {
      alert(
        'Warning! A contact with this name already exists in the contact book! '
      );
    }
  };

  deleteContact = contactId => {
    const newArray = this.state.contacts.filter(
      contact => contact.id !== contactId
    );
    this.setState(prevState => ({
      contacts: newArray,
    }));
  };

  changeFilter = e => {
    this.setState({
      filter: e.currentTarget.value,
    });
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const { filter } = this.state;
    const filteredContacts = this.getFilteredContacts();

    return (
      <Container>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />

        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.changeFilter} />
        <ContactList
          contacts={filteredContacts}
          onDeleteContact={this.deleteContact}
        />
      </Container>
    );
  }
}

export default App;
