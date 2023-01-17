import { AnyAction } from 'redux';
import actions from '../actions.json';

const initialState: workfall.state.IStepper = {
  form: {
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    email: '',
    phone: '',
    zip: '',
    address: '',
  },
};

const stepperReducer = (
  state: workfall.state.IStepper = initialState,
  action: AnyAction
): workfall.state.IStepper => {
  switch (action.type) {
    case actions.stepper.SAVE_FORM:
      return {
        ...state,
        form: action.stepper,
      };
    default:
      return state;
  }
};

export default stepperReducer;
