import React, { useEffect, useRef, useState } from 'react';
import { bool, func } from 'prop-types';

import Button from '../Button';

const Modal = ({ loading, onAccept, onCancel, visible }) => {
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
      <div className="modal" data-test="modal">
        <div className="modal__backdrop">
          <div className="modal__backdrop__body">
            <h2>Add an item</h2>
            <input
              className="modal__backdrop__body__input"
              data-test="add-input"
              onChange={handleChange}
              onKeyPress={handleKeyPress}
              ref={ref}
              type="text"
              value={value}
            />
            <div className="modal__backdrop__body__buttons">
              <Button
                aria-label="Close modal"
                data-test="cancel-item-button"
                disabled={loading}
                onClick={onCancel}
                >
                Close
              </Button>
              <Button
                aria-label={`Add item ${value}`}
                data-test="save-item-button"
                disabled={!value || loading}
                onClick={handleAccept}
                primary
              >
                Save
              </Button>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

Modal.propTypes = {
  loading: bool,
  onAccept: func.isRequired,
  onCancel: func.isRequired,
  visible: bool
};

export default Modal;
