import { FunctionComponent } from "react";
import { useForm } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import actions from '../../redux/actions.json';

interface AddressInfoProps {
    
}

type IStepper = workfall.models.IStepperForm;
 
const AddressInfo: FunctionComponent<AddressInfoProps> = () => {
    const formData = useAppSelector((state) => state.stepper.form)

    const { register, handleSubmit } = useForm({ shouldUseNativeValidation: true, defaultValues: formData });
    const dispatch = useAppDispatch()

    const onSubmit = (data: Partial<IStepper>) => { 
        dispatch({ type: actions.stepper.SAVE_FORM, payload: {...formData, ...data} })
     };

    return (
        <div className="p-4">
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
            <label htmlFor="">ZIP Code</label>
            <input type="text" placeholder="ZIP Code" {...register("zip", { required: "Please enter your ZIP Code." })} className="form-input px-4 py-3 rounded-r-lg rounded-l-lg w-1/2 mb-2 border-slate-400 border-2" />

            <label htmlFor="">Street, Apartment, Suite</label>
            <input type="text" placeholder="Street, Apartment, Suite" {...register("address", { required: "Please enter your Address." })} className="form-input px-4 py-3 rounded-r-lg rounded-l-lg w-1/2 mb-2 border-slate-400 border-2" />

            <button className="px-2 py-2 bg-blue-700 w-1/5 rounded-r-lg rounded-l-lg text-slate-100 hover:bg-blue-500" type="submit">Save</button>
            </form>
        </div>
    );
}
 
export default AddressInfo;