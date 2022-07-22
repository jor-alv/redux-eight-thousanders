import React from 'react';
import { useSelector } from 'react-redux';
import { EightThousander } from './EightThousander.jsx';

export function EightThousanderList() {
  const { allEightThousanders } = useSelector(state => state.eightThousanders);
  const renderList = () => {
    return allEightThousanders.map((mountain) => {
      return (
        <EightThousander
          key={mountain.name}
          mountain={mountain}
        />
      );
    });
  }
  return (
    <div className="eight-K-container">
      <div>
        <div className="eight-K-intro"><span className="title">Eight-thousanders</span> are the 14 mountains that are more than 8,000 metres (26,247 ft) in height above sea level.</div>
        <div className="eight-K-instructions">* Click on a specific eight-thousander to see more details about it:</div>
      </div>
      <div>
        <ul className="eight-K-list icon">
          {renderList()}
        </ul>
      </div>
    </div>
  );
}
