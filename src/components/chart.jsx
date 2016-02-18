import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';
import _ from 'lodash';

function average(data) {
  return _.round(_.sum(data)/data.length);
}

//this is a stateless component just renders the chart with the data given from weather_list
export default (props) => {
  
  return(
    <div>
      <Sparklines data={props.data}   width={200} height={100} margin={5}>
          <SparklinesLine color={props.colour} />
          <SparklinesReferenceLine type="avg" />
      </Sparklines>
      <div>Avg: {average(props.data)}</div>
    </div>
  )
}