import { FunctionComponent } from "react";

interface AddressInfoProps {
    
}
 
const AddressInfo: FunctionComponent<AddressInfoProps> = () => {
    return (
        <div className="p-4 flex flex-col">
            <label htmlFor="">ZIP Code</label>
            <input type="text" placeholder="ZIP Code" className="form-input px-4 py-3 rounded-r-lg rounded-l-lg w-1/2 mb-2 border-slate-400 border-2" />

            <label htmlFor="">Street, Apartment, Suite</label>
            <input type="text" placeholder="Street, Apartment, Suite" className="form-input px-4 py-3 rounded-r-lg rounded-l-lg w-1/2 mb-2 border-slate-400 border-2" />
        </div>
    );
}
 
export default AddressInfo;