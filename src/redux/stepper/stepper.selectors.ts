type IStepperForm = workfall.models.IStepperForm

export const currentForm = (state: { stepper: { form: IStepperForm } }) => {
  return state.stepper.form;
};