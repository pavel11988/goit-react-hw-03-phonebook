import PropTypes from 'prop-types';

import {
  List,
  Contact,
  Info,
  Name,
  Telephone,
  Button,
} from './ContactList.styled';

const ContactList = ({ contacts, onDeleteContact }) => (
  <List>
    {contacts.map(({ id, name, tel }) => (
      <Contact key={id}>
        <Info>
          <Name>Name: {name}</Name>
          <Telephone>Tel: {tel}</Telephone>
        </Info>
        <Button type="button" onClick={() => onDeleteContact(id)}>
          Delete
        </Button>
      </Contact>
    ))}
  </List>
);

ContactList.propTypes = {
  contacts: PropTypes.array,
  onDeleteContact: PropTypes.func,
};

export default ContactList;
