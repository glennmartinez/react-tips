import { FETCH_WEATHER } from '../actions/index'

export default function(state = [], action) {
  
  switch (action.type) {
    case FETCH_WEATHER:
      //this returns a new version of the state and no mutating it this is another version of it
      // return state.concat([ action.payload.data ]); //this is same thing as below just adds to end of array
      return [ action.payload.data, ...state ];
  }
  return state;
}