import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
import eightThousanders from '../data/eight-thousanders';
import EightThousander from './eight_thousander.jsx';
// TODO import actions from '../features/eightThousanders/eightThousandersSlice';

export default function EightThousanderList() {
  const renderList = () => {
    return eightThousanders.map((mountain) => {
      return (
        <EightThousander
          key={mountain.height}
          name={mountain.name}
          height={mountain.height}
          country={mountain.country}
          imageUrl={mountain.imageUrl}
        />
      );
    });
  }

  return (
    <div className="8K-list">
      {renderList()}
    </div>
  );
}
