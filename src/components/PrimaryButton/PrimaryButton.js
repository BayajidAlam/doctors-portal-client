import React from 'react';

const PrimaryButton = ({children}) => {
  return (
    <button className="h-14 bg-gradient-to-r from-primary to-secondary text-white btn">{children}</button>
  );
};

export default PrimaryButton;