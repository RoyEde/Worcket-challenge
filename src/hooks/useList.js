import { useEffect, useState } from 'react';

import { generateId } from '../utils/generateId';

const useList = key => {
  const [items, setItems] = useState([]);
  
  useEffect(() => {
    const storedItems = localStorage.getItem('key');
    if (storedItems) setItems(JSON.parse(storedItems))
  }, []);
  
  useEffect(() => {
    localStorage.setItem('key', JSON.stringify(items));
  }, [items]);

  const addItem = item => setItems([...items, { item, id: generateId() }]);
  const deleteItem = id => setItems(items.filter(({ id: itemId }) => itemId !== id));

  return [items, addItem, deleteItem];
};

export default useList;
