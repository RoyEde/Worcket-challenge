import React from 'react';

import Button from './components/Button';
import CartList from './components/CartList';
import Modal from './components/Modal';
import useList from './hooks/useList';
import useToggle from './hooks/useToggle';

const App = () => {
  const [modal, toggleModal] = useToggle();
  const [items, addItem, deleteItem, loading] = useList('items');

  const handleAddItem = item => {
    addItem(item);
    toggleModal();
  };

  return (
    <div className="app">
      <h1 className="app__title">Supermarket List</h1>
      <div className="app__container">
        <CartList loading={loading} items={items} onDelete={deleteItem} />
        <Button disabled={loading} onClick={toggleModal} primary>Add an item</Button>
      </div>
      <Modal loading={loading} onAccept={handleAddItem} onCancel={toggleModal} visible={modal}>Add an item</Modal>
    </div>
  );
}

export default App;
