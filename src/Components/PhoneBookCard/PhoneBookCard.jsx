import React, { Component } from 'react';
import PhoneBookCardTitle from '../PhoneBookCardTitle/PhoneBookCardTitle';

export class PhoneBookCard extends Component {
  state = {
    contacts: [],
    name: '',
  };

  render() {
    return (
      <div>
        <PhoneBookCardTitle title="Phonebook" />
        <form>
          <label>
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              required
            />
          </label>
        </form>
        <PhoneBookCardTitle title="Contacts" />
      </div>
    );
  }
}

export default PhoneBookCard;
