import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import eightThousanders from '../data/eight-thousanders';
// TODO import actions from '../features/eightThousanders/eightThousandersSlice';

export default function EightThousander(props) {
  return (
    <div className="8K">
      <span className="material-icons-round">terrain</span> {props.name}
    </div>
  );
}
