import React from 'react';
import {} from 'react-redux';
// import eightThousanders from '../data/eight-thousanders';
// import EightThousander from './eight_thousander';
// TODO import actions from '../features/activeEightThousander/activeEightThousanderSlice';

export default function ActiveEightThousander(props) {
  if (!props.activeEightThousander) {
    return (
      <div className="active-eight-K">
        <p>Select an eight-thousander...</p>
      </div>
    );
  }

  return (
    <div className="active-eight-K">
      <h3>{props.activeEightThousander.name}</h3>
      <p>Height = {props.activeEightThousander.height}</p>
      <p>Country = {props.activeEightThousander.country}</p>
      <img src={props.activeEightThousander.imageUrl} alt={props.activeEightThousander.name} width="100%" />
    </div>
  );
}
