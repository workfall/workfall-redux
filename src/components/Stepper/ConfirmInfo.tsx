import { FunctionComponent } from "react";
import { useAppSelector } from "../../redux/hooks";

interface ConfirmInfoProps {

}

const ConfirmInfo: FunctionComponent<ConfirmInfoProps> = () => {
    const formData = useAppSelector((state) => state.stepper.form)
    
    return (
        <>
            <div className="p-4 flex flex-row">
                <div className="basis-1/3">
                    <h2 className="text-l font-bold mb-4 text-slate-400">Personal Information</h2>
                    <p className="mb-3 p-2"><strong>First Name: </strong>{formData.firstName}</p>
                    <p className="mb-3 p-2"><strong>Last Name: </strong>{formData.lastName}</p>
                    <p className="mb-3 p-2"><strong>Date of Birth: </strong>{formData.dateOfBirth}</p>
                </div>

                <div className="basis-1/3">
                    <h2 className="text-l font-bold mb-4 text-slate-400">Contact Information</h2>
                    <p className="mb-3 p-2"><strong>Email: </strong>{formData.email}</p>
                    <p className="mb-3 p-2"><strong>Phone: </strong>{formData.phone}</p>
                </div>

                <div className="basis-1/3">
                    <h2 className="text-l font-bold mb-4 text-slate-400">Address Information</h2>
                    <p className="mb-3 p-2"><strong>ZIP Code: </strong>{formData.zip}</p>
                    <p className="mb-3 p-2"><strong>Street, Apartment, Suite: </strong>{formData.address}</p>
                </div>
            </div>
        </>
    );
}

export default ConfirmInfo;