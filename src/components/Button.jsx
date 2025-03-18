import React from 'react';

const Button = ({ name }) => {
  return (
    <div>
      <button className="m-2 px-5 bg-gray-100 rounded-lg">{name}</button>
    </div>
  );
};

export default Button;
