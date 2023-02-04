import React from 'react';
import PropTypes from 'prop-types';
import {
  ListItem,
  MainWrapper,
  Wrapper,
  NumberWrapper,
  ItemButton,
} from './ContactItem.styled';

export default function ContactListItem({
  name,
  number,
  deleteContact,
  userId,
}) {
  return (
    <MainWrapper>
      <Wrapper>
        <ListItem>{name}:</ListItem>
      </Wrapper>
      <NumberWrapper>
        <ListItem>{number}</ListItem>
        <ItemButton type="button" onClick={() => deleteContact(userId)}>
          Delete
        </ItemButton>
      </NumberWrapper>
    </MainWrapper>
  );
}

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
  userId: PropTypes.string.isRequired,
};
