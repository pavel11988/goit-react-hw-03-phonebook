import PropTypes from 'prop-types';

import { Label, Search } from './Filter.styled';

const Filter = ({ value, onChange }) => (
  <Label>
    Filter by name:
    <Search type="text" value={value} onChange={onChange} />
  </Label>
);

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default Filter;
