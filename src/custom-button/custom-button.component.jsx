import React from 'react';
const CustomButton = ({ text, clickEvent, className }) => {
  return (
    <button className={className} onClick={clickEvent}>
      {text}
    </button>
  );
};
export default CustomButton;
