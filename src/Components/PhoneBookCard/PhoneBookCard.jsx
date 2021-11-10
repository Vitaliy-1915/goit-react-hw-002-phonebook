import React, { Component } from 'react';
import PhoneBookCardTitle from '../PhoneBookCardTitle/PhoneBookCardTitle';
import ContactsList from '../ContactsList/ContactsList';
import Form from '../Form/Form';
import Filter from '../Filter/Filter';
import { v4 as unId } from 'uuid';

export class PhoneBookCard extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  formSubmit = value => {
    const contact = {
      id: unId(),
      name: value.name,
      number: value.number,
    };

    //   this.setState((prevState) => ({
    // contacts: [...prevState.contacts, contact],
    //   }));

    this.state.contacts.find(contact =>
      contact.name.toLowerCase().includes(contact.name.toLowerCase()),
    )
      ? alert(`${contact.name} is already in contacts`)
      : this.setState(prevState => ({
          contacts: [...prevState.contacts, contact],
        }));
  };

  onChangeFilter = e => {
    this.setState({
      filter: e.currentTarget.value,
    });
  };

  onDeleteContact = contactId => {
    // console.log(contactId);
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    // const { contacts, filter } = this.state;

    const normalizeContacts = this.state.filter.toLocaleLowerCase();

    const filterContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeContacts),
    );

    return (
      <div>
        <PhoneBookCardTitle title="Phonebook" />
        <Form onSubmit={this.formSubmit} />
        <PhoneBookCardTitle title="Contacts" />
        <Filter value={this.state.filter} onChange={this.onChangeFilter} />
        <ContactsList
          contacts={filterContacts}
          onDeleteContact={this.onDeleteContact}
        />
      </div>
    );
  }
}

export default PhoneBookCard;
