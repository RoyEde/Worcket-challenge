import React from 'react';

import Button from './components/Button';
import CartList from './components/CartList';
import Modal from './components/Modal';
import useList from './hooks/useList';
import useToggle from './hooks/useToggle';
import './styles.css';

const App = () => {
  const [modal, toggleModal] = useToggle();
  const [items, addItem, deleteItem] = useList();

  const handleAddItem = item => {
    addItem(item);
    toggleModal();
  };

  return (
    <div className="app">
      <h1>Supermarket List</h1>
      <Button onClick={toggleModal} primary>Add an item</Button>
      <CartList items={items} onDelete={deleteItem} />
      <Modal onAccept={handleAddItem} onCancel={toggleModal} visible={modal}>Add an item</Modal>
    </div>
  );
}

export default App;
