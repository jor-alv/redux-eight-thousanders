import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import eightThousanders from '../data/eight-thousanders';
// TODO import actions from '../features/eightThousanders/eightThousandersSlice';

export default function EightThousander(props) {
  return (
    <li className="eight-K-list-element">
      <p><span className="material-icons-round">terrain</span> {props.mountain.name}</p>
    </li>
  );
}
