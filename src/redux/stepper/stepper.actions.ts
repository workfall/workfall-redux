import actions from '../actions.json';
import { AnyAction } from 'redux'

type IStepperForm = workfall.models.IStepperForm

export function setStepperForm(stepper: IStepperForm): AnyAction {
  return {
    type: actions.stepper.SAVE_FORM,
    stepper,
  }
}