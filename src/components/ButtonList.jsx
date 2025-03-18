import React from 'react';
import Button from './Button';

const ButtonList = () => {
  return (
    <div className="flex">
      <Button name="All" />
      <Button name="Game" />
      <Button name="Live" />
      <Button name="Comedy" />
      <Button name="Mantras" />
      <Button name="Posdcast" />
      <Button name="Technology" />
    </div>
  );
};

export default ButtonList;
