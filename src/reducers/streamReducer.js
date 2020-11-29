import _ from 'lodash';

import {
  CREATE_STREAM,
  FETCH_STREAM,
  FETCH_STREAMS,
  DELETE_STREAM,
  EDIT_STREAM
} from '../actions/types';

const streamReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_STREAMS:
      // take all key value pairs from state, turns the list of streams into an object
      return {...state, ..._.mapKeys(action.payload, 'id' )};
    case FETCH_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_STREAM:
      // omit doesnt change the original object. creates a new one from state
      return _.omit(state, action.payload);
    default:
      return state;
  }
};

export default streamReducer;
