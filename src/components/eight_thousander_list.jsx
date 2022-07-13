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
          key={mountain.name}
          name={mountain.name}
        />
      );
    });
  }

  return (
    <div>
      <div>
        Click on a specific mountain to see more details:
      </div>
      <div className="8K-list">
        {renderList()}
      </div>
    </div>
  );
}
