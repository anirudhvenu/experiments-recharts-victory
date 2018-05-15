import React from 'react';
import Victory from './VictoryChartComp';
import Recharts from './RechartsChartComp';

class charts extends React.Component{
  render(){
    return (
      <div>
      <Victory />
      <Recharts />
      </div>
    );
  }
}

export default  charts;