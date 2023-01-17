import { FunctionComponent } from "react";
import { useForm } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import actions from '../../redux/actions.json';

interface PersonalInfoProps {

}

type IStepper = workfall.models.IStepperForm;

const PersonalInfo: FunctionComponent<PersonalInfoProps> = () => {
    const formData = useAppSelector((state) => state.stepper.form)
    
    const { register, handleSubmit } = useForm({ shouldUseNativeValidation: true, defaultValues: formData });
    const dispatch = useAppDispatch()

    const onSubmit = (data: Partial<IStepper>) => {
        dispatch({ type: actions.stepper.SAVE_FORM, payload: {...formData, ...data} })
    };

    return (
        <div className="p-4">
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
                <label htmlFor="">First Name</label>
                <input type="text" placeholder="First Name" {...register("firstName", { required: "Please enter your first name." })} className="form-input px-4 py-3 rounded-r-lg rounded-l-lg w-1/2 mb-2 border-slate-400 border-2" />

                <label htmlFor="">Last Name</label>
                <input type="text" placeholder="Last Name" {...register("lastName", { required: "Please enter your last name." })} className="form-input px-4 py-3 rounded-r-lg rounded-l-lg w-1/2 mb-2 border-slate-400 border-2" />

                <label htmlFor="">Date of Birth</label>
                <input type="date" placeholder="Date of Birth" {...register("dateOfBirth", { required: "Please enter your Date of Birth." })} className="form-input px-4 py-3 rounded-r-lg rounded-l-lg w-1/2 mb-2 border-slate-400 border-2" />

                <button className="px-2 py-2 bg-blue-700 w-1/5 rounded-r-lg rounded-l-lg text-slate-100 hover:bg-blue-500" type="submit">Save</button>
            </form>
        </div>
    );
}

export default PersonalInfo;