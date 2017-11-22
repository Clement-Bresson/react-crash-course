import React from 'react';

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

export default Guest;
