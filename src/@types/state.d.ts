declare module workfall.state {
    export interface IStepper {
        form: workfall.models.IStepperForm
    }

    export interface IRedux {
        stepper: IStepperForm,
        router: import('connected-react-router').RouterState
      }
}