import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactList from 'components/ContactList';
import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter';
import { Wrapper, Title, ContactsWrapper } from './App.styled';

export default class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  formSubmitHandler = newContact => {
    if (
      this.state.contacts.find(
        contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
      )
    ) {
      return alert(`${newContact.name} is already in contacts`);

    }
    this.setState(prevState => {
      return {
        contacts: [
      ...prevState.contacts,
      { id: nanoid(), name: newContact.name, number: newContact.number },
    ],
    }
    });
  };

  handleFilterInputChange = event => {
    const { value } = event.target;
    this.setState({ filter: value });
  };

  renderContacts() {
    const { contacts, filter } = this.state;
    return contacts
    .sort((a, b) => a.name.localeCompare(b.name))
      .filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      )
  }

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const {  filter } = this.state;
    const renderContacts = this.renderContacts();
    return (
      <Wrapper>
        <Title>Phonebook</Title>
        <ContactForm
          onSubmitForm={this.formSubmitHandler}
        />
        <Title>Contacts:</Title>
        <ContactsWrapper>
          <Filter filter={filter} onChange={this.handleFilterInputChange} />
          <ContactList
            contacts={renderContacts}
            deleteContact={this.deleteContact}
          />
        </ContactsWrapper>
      </Wrapper>
    );
  }
}
