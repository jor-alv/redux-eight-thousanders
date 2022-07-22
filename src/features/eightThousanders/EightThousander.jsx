import React from 'react';
import { useDispatch } from 'react-redux';
import { selectMountain } from './eightThousandersSlice';

export function EightThousander(props) {
  const dispatch = useDispatch();
  const select = () => {
    dispatch(selectMountain(props.mountain));
  }
  return (
    <li className="eight-K-list-element" onClick={select}>
      <p><span className="material-icons-round">terrain</span> {props.mountain.name}</p>
    </li>
  );
}
