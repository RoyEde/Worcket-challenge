// These dependencies don't need to be updated.
/* eslint-disable react-hooks/exhaustive-deps */
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
    toggleLoading();
  }, [items]);

  const addItem = item => {
    toggleLoading();
    put(key, [...items, { item, id: generateId() }]).then(setItems);
  };

  const deleteItem = id => {
    toggleLoading();
    put(key, items.filter(({ id: itemId }) => itemId !== id)).then(setItems);
  };

  return [items, addItem, deleteItem, loading];
};

export default useList;
