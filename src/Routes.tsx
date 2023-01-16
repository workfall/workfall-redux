import { FunctionComponent, lazy } from "react";
import { Routes, Route } from "react-router-dom";

const Home = lazy(() => import("./views/Home"))
const PersonalInfo = lazy(() => import("./components/Stepper/PersonalInfo"))
const ContactInfo = lazy(() => import("./components/Stepper/ContactInfo"))
const AddressInfo = lazy(() => import("./components/Stepper/AddressInfo"))
const ConfirmInfo = lazy(() => import("./components/Stepper/ConfirmInfo"))

interface AppRoutesProps {

}

const AppRoutes: FunctionComponent<AppRoutesProps> = () => {
    return (
        <Routes>
            <Route
                path="/"
                element={
                    <Home />
                }>
                    <Route path="/" element={<PersonalInfo />} />
                    <Route path="/contact" element={<ContactInfo />} />
                    <Route path="/address" element={<AddressInfo />} />
                    <Route path="/confirm" element={<ConfirmInfo />} />
                </Route>
        </Routes>
    );
}

export default AppRoutes;