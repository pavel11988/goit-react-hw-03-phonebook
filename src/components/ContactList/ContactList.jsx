import PropTypes from 'prop-types';

import { List } from './ContactList.styled';

import { Contact } from 'components/Contact/Contact';

const ContactList = ({ contacts, onDeleteContact }) => (
  <List>
    {contacts.map(({ id, name, tel }) => (
      <Contact
        key={id}
        id={id}
        name={name}
        tel={tel}
        onDeleteContact={onDeleteContact}
      />
    ))}
  </List>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;
