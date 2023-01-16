import { FunctionComponent } from "react";

interface ConfirmInfoProps {

}

const ConfirmInfo: FunctionComponent<ConfirmInfoProps> = () => {
    return (
        <>
            <div className="p-4 flex flex-row">
                <div className="basis-1/3">
                    <h2 className="text-l font-bold mb-4 text-slate-400">Personal Information</h2>
                    <p className="mb-3 p-2"><strong>First Name: </strong></p>
                    <p className="mb-3 p-2"><strong>Last Name: </strong></p>
                    <p className="mb-3 p-2"><strong>Date of Birth: </strong></p>
                </div>

                <div className="basis-1/3">
                    <h2 className="text-l font-bold mb-4 text-slate-400">Contact Information</h2>
                    <p className="mb-3 p-2"><strong>Email: </strong></p>
                    <p className="mb-3 p-2"><strong>Phone: </strong></p>
                </div>

                <div className="basis-1/3">
                    <h2 className="text-l font-bold mb-4 text-slate-400">Address Information</h2>
                    <p className="mb-3 p-2"><strong>ZIP Code: </strong>fsdfsdfdsfsdfdsf</p>
                    <p className="mb-3 p-2"><strong>Street, Apartment, Suite: </strong>sfsfsfddgdsgfdgdgdssf</p>
                </div>
            </div>
        </>
    );
}

export default ConfirmInfo;