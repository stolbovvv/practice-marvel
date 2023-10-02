import { useState } from 'react';

export function useList(limit) {
  const [list, setList] = useState([]);
  const [ended, setEnded] = useState(false);
  const [offset, setOffset] = useState(0);

  const updateList = (data) => {
    setList((list) => [...list, ...data]);
    setEnded(data.length < limit);
    setOffset((offset) => offset + limit);
  };

  return { list, ended, limit, offset, updateList };
}
