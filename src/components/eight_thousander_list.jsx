import React, { Component } from 'react';

import eightThousanders from '../data/eight-thousanders';

import EightThousander from './eight_thousander';

export default class EightThousanderList extends Component {
  renderList = () => {
    // return (
    //   <EightThousander />
    // );
  }

  render() {
    return (
      <div className="8th-list">
        {this.renderList()}
      </div>
    );
  }
}
