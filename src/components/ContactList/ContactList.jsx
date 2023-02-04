import React from 'react';
import PropTypes from 'prop-types';
import ContactListItem from 'components/ContactItem';
import { List } from './ContactList.styled';

export default function ContactList({ contacts, deleteContact }) {
  return (
    <List>
      {contacts.length ? (
        contacts.map(contact => {
          const { name, id, number } = contact;
          return (
            <ContactListItem
              key={id}
              userId={id}
              name={name}
              number={number}
              deleteContact={deleteContact}
            />
          );
        })
      ) : (
        <p>No contacts</p>
      )}
    </List>
  );
}

ContactList.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }),
  deleteContact: PropTypes.func.isRequired,
};
