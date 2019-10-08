import { useEffect, useState } from 'react';

import { generateId } from '../utils/generateId';
import { get, put } from '../utils/apiMock';
import useToggle from './useToggle';

const useList = key => {
  const [loading, toggleLoading] = useToggle(false);
  const [items, setItems] = useState([]);
  
  useEffect(() => {
    toggleLoading();
    get(key).then(setItems);
  }, []);
  
  useEffect(() => {
    put(key, items).then(toggleLoading);
  }, [items]);

  const addItem = item => {
    toggleLoading();
    setItems([...items, { item, id: generateId() }]);
  };
  const deleteItem = id => {
    toggleLoading();
    setItems(items.filter(({ id: itemId }) => itemId !== id));
  };

  return [items, addItem, deleteItem, loading];
};

export default useList;
