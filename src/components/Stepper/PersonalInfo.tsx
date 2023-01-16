import { FunctionComponent } from "react";

interface PersonalInfoProps {
    
}
 
const PersonalInfo: FunctionComponent<PersonalInfoProps> = () => {
    return (
        <div className="p-4 flex flex-col">
            <label htmlFor="">First Name</label>
            <input type="text" placeholder="First Name" className="form-input px-4 py-3 rounded-r-lg rounded-l-lg w-1/2 mb-2 border-slate-400 border-2" />

            <label htmlFor="">Last Name</label>
            <input type="text" placeholder="Last Name" className="form-input px-4 py-3 rounded-r-lg rounded-l-lg w-1/2 mb-2 border-slate-400 border-2" />

            <label htmlFor="">Date of Birth</label>
            <input type="date" placeholder="Last Name" className="form-input px-4 py-3 rounded-r-lg rounded-l-lg w-1/2 mb-2 border-slate-400 border-2" />
        </div>
    );
}
 
export default PersonalInfo;