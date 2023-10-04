import { useState } from 'react';

export function useList(initLimit, initOffset = 0) {
  const [data, setData] = useState([]);
  const [ended, setEnded] = useState(false);
  const [offset, setOffset] = useState(initOffset);

  const setList = (newData) => {
    setData((data) => [...data, ...newData]);
    setEnded(newData.length < initLimit);
    setOffset((offset) => offset + initLimit);
  };

  const list = { data, ended, offset, limit: initLimit };

  return { list, setList };
}
