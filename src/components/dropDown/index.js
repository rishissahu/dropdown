import React from 'react';
import './styles.css';

const Dropdown = ({ options, onOptionClick }) => {
  return (
    <div className="absolute w-full bg-white border rounded-lg overflow-hidden">
      {options.map((option, index) => (
        <div
          key={index}
          className="border-b p-2 hover:bg-slate-100 m-1"
          onClick={() => onOptionClick(option)}
        >
          {option}
        </div>
      ))}
    </div>
  );
};

export default Dropdown;
