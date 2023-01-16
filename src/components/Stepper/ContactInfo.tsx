import { FunctionComponent } from "react";

interface ContactInfoProps {
    
}
 
const ContactInfo: FunctionComponent<ContactInfoProps> = () => {
    return (
        <div className="p-4 flex flex-col">
             <label htmlFor="">Email</label>
            <input type="email" placeholder="Email" className="form-input px-4 py-3 rounded-r-lg rounded-l-lg w-1/2 mb-2 border-slate-400 border-2" />

            <label htmlFor="">Phone</label>
            <input type="number" min={0} placeholder="Phone" className="form-input px-4 py-3 rounded-r-lg rounded-l-lg w-1/2 mb-2 border-slate-400 border-2" />
        </div>
    );
}
 
export default ContactInfo;