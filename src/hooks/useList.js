import { useState } from 'react';

function useList({ initLimit = 0, initOffset = 0 }) {
  const [offset, setOffset] = useState(initOffset);
  const [ended, setEnded] = useState(false);
  const [list, setList] = useState([]);

  const updateList = ({ data }) => {
    setOffset((offset) => offset + initLimit);
    setEnded(data.length < initLimit);
    setList((list) => [...list, ...data]);
  };

  const listState = {
    offset,
    limit: initLimit,
    ended,
    list,
  };

  return [listState, updateList];
}

export { useList };
