import React from 'react';

import EightThousanderList from '../components/eight_thousander_list';
import ActiveEightThousander from '../components/active_eight_thousander';

const App = () => {
  return (
    <div className="app">
      <EightThousanderList />
      <ActiveEightThousander />
    </div>
  );
};

export default App;
