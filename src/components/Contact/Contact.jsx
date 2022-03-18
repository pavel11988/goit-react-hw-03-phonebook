import PropTypes from 'prop-types';

import {
  ContactContainer,
  Info,
  Name,
  Telephone,
  Button,
} from './Contact.styled';

export const Contact = ({ id, name, tel, onDeleteContact }) => {
  return (
    <ContactContainer>
      <Info>
        <Name>Name: {name}</Name>
        <Telephone>Tel: {tel}</Telephone>
      </Info>
      <Button type="button" onClick={() => onDeleteContact(id)}>
        Delete
      </Button>
    </ContactContainer>
  );
};

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  tel: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
