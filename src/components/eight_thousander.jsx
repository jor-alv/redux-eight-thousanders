import React from 'react';
import { useDispatch } from 'react-redux';
import { selectEightThousander } from '../features/eightThousanders/eightThousandersSlice';

export default function EightThousander(props) {
  const dispatch = useDispatch();

  const select = () => {
    dispatch(selectEightThousander(props.mountain))
  }

  return (
    <li className="eight-K-list-element" onClick={select}>
      <p><span className="material-icons-round">terrain</span> {props.mountain.name}</p>
    </li>
  );
}
