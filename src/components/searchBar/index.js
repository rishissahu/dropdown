import React, { useEffect, useState } from "react";
import "./styles.css";
import Dropdown from "../dropDown";
import { IoIosCloseCircle } from "react-icons/io";

const attributes = ["Attribute1", "Attribute2", "Attribute3"];
const values = ["Attribute1", "Attribute2", "Attribute3"];
const operations = ["equals", "contains", "starts with", "ends with"];

const SearchBar = () => {
  const [triplets, setTriplets] = useState([]);
  const [currentAttribute, setCurrentAttribute] = useState(null);
  const [currentOperation, setCurrentOperation] = useState(null);
  const [currentValue, setCurrentValue] = useState("");
  const [showAttributes, setShowAttributes] = useState(false);
  const [showOperations, setShowOperations] = useState(false);
  const [showValues, setShowValues] = useState(false);

  const handleAttributeClick = (attribute) => {
    setCurrentAttribute(attribute);
    setShowAttributes(false);
    setShowOperations(true);
  };

  const handleOperationClick = (operation) => {
    setCurrentOperation(operation);
    setShowOperations(false);
    setShowValues(true);
  };
  const handleValueClick = (value) => {
    setCurrentValue(value);
    setShowValues(false);
  };

  useEffect(() => {
    if (currentAttribute && currentOperation && currentValue) {
      setTriplets([
        ...triplets,
        {
          attribute: currentAttribute,
          operation: currentOperation,
          value: currentValue,
        },
      ]);
      setCurrentAttribute(null);
      setCurrentOperation(null);
    }
  }, [currentAttribute, currentOperation, currentValue]);

  const handleDeleteTriplet = (index) => {
    setTriplets(triplets.filter((_, i) => i !== index));
  };

  return (
    // <div className="flex items-center justify-center">
      <div className="w-1/2">
        <div
          className="border rounded-lg mb-2 p-3"
          onClick={() => setShowAttributes(true)}
        >
          {currentAttribute ? (
            <span>
              {currentAttribute} {currentOperation}
            </span>
          ) : (
            <span className="placeholder">Click to add a filter</span>
          )}
        </div>
        {showAttributes && (
          <Dropdown options={attributes} onOptionClick={handleAttributeClick} />
        )}
        {showOperations && (
          <Dropdown options={operations} onOptionClick={handleOperationClick} />
        )}
        {showValues && (
          <Dropdown options={values} onOptionClick={handleValueClick} />
        )}
        <div className="flex flex-wrap gap-2 mt-5">
          {triplets.map((triplet, index) => (
            <div
              className="border flex items-center gap-2 rounded-full px-2 py-1"
              key={index}
            >
              <span>
                {triplet.attribute} {triplet.operation} {triplet.value}
              </span>
              <button className="" onClick={() => handleDeleteTriplet(index)}>
                <IoIosCloseCircle size={20} />
              </button>
            </div>
          ))}
        </div>
      </div>
    // </div>
  );
};

export default SearchBar;
