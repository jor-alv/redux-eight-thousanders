import React from 'react';
import { EightThousanderList } from '../features/eightThousanders/EightThousanderList';
import { ActiveEightThousander } from '../features/eightThousanders/ActiveEightThousander';

const App = () => {
  return (
    <div className="app">
      <EightThousanderList />
      <ActiveEightThousander />
    </div>
  );
};

export default App;
