import { FunctionComponent, Suspense, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import TabPanel, { TabProps, Position } from "../components/TabPanel";

interface HomeProps {

}

const Home: FunctionComponent<HomeProps> = () => {
    const navigate = useNavigate();
    const [tabs, setTabs] = useState<TabProps[]>(
        [
            {
                tabName: 'Personal Information',
                id: 1,
                position: Position.first,
                active: true
            },
            {
                tabName: 'Contact Information',
                id: 2,
                active: false
            },
            {
                tabName: 'Physical Address',
                id: 3,
                active: false
            },
            {
                tabName: 'Confirm Information',
                id: 4,
                active: false,
                position: Position.last,
            }
        ]
    );

    const handleTabClick = (e: number) => {
        if (e === 1) {
            navigate('')
        } else if (e === 2) {
            navigate('contact')
        } else if (e === 3) {
            navigate('address')
        } else if (e === 4) {
            navigate('confirm')
        }

        setTabs(prevState => {
            return prevState.map(tab => {
                if (tab.id === e) {
                    tab.active = true
                } else {
                    tab.active = false
                }

                return tab
            })
        })
    }

    return (
        <div className="container mx-auto">
            <h1 className="text-center text-xl font-bold mb-4 text-slate-400">Stepper Form</h1>
            <TabPanel propagateHandleTabClick={handleTabClick} tabs={tabs} />
            <Suspense fallback={<div />}>
                <Outlet />
            </Suspense>
        </div>
    );
}

export default Home;