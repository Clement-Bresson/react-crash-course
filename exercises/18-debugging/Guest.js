import React from 'react';
import PropTypes from 'prop-types';

const Guest = ({
  onRemove,
  name,
  children
}) => {
  return (
    <tr>
      <td>{name}</td>
      <td>{children}</td>
      <td>
        <button
        type='button'
        className='close'
        onClick={() => onRemove(name)}
        >
          <span>&times;</span>
        </button>
      </td>
    </tr>
  );
};

Guest.propTypes = {
  onRemove: PropTypes.func.isRequired
};

export default Guest;
