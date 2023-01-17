import { connectRouter } from 'connected-react-router';
import { combineReducers } from 'redux';
import { History } from 'history';

import stepper from '../stepper/stepper.reducer';

export default function createRootReducer(history: History) {
  return combineReducers({
    stepper,
    router: connectRouter(history),
  });
}
