import React, { useEffect, useRef, useState } from 'react';

import './styles.css';
import Button from '../Button';

const Modal = ({ children, onAccept, onCancel, visible }) => {
  const ref = useRef();

  useEffect(() => {
    if (visible) ref.current && ref.current.focus();
    else setValue('');
  }, [visible]);

  const [value, setValue] = useState('');

  const handleAccept = () => {
    if (value) onAccept(value);
  };
  const handleChange = ({ target }) => setValue(target.value);
  const handleKeyPress = ({ key }) => {
    if (key === 'Enter') handleAccept();
  };

  return (
    visible && (
      <div className="modal">
        <div className="modal__backdrop">
          <div className="modal__backdrop__body">
            <h2>Add an item</h2>
            <input
              className="modal__backdrop__body__input"
              onChange={handleChange}
              onKeyPress={handleKeyPress}
              ref={ref}
              type="text"
              value={value}
            />
            <div className="modal__backdrop__body__buttons">
              <Button aria-label="Close modal" onClick={onCancel}>Close</Button>
              <Button
                aria-label={`Add item ${value}`}
                disabled={!value}
                onClick={handleAccept}
                primary
              >
                Add
              </Button>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default Modal;
