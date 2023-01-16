import { FunctionComponent } from "react";

export enum Position {
    first = 'first',
    last = 'last'
}

export interface TabProps {
    position?: Position;
    tabName: string;
    id: number;
    active: boolean;
    flexBasis?: string;
    handleTabClick?: (e: number) => void
}

export interface TabPanelProps {
    tabs: TabProps[],
    propagateHandleTabClick: (e: number) => void
}

const getLastAndFirstCSSClass = (position: Position | undefined, activeStatus: boolean): string => {
    let styleClass: string
    if (position === Position.first) {
        styleClass = 'rounded-full rounded-r-none'
    } else if (position === Position.last) {
        styleClass = 'rounded-full rounded-l-none'
    } else {
        styleClass = ''
    }

    if (activeStatus) {
        styleClass += ' bg-slate-400 text-slate-100'
    }

    return styleClass
}

const Tab: FunctionComponent<TabProps> = ({ position, tabName, flexBasis, handleTabClick, id, active }) => {
    const styleClass = getLastAndFirstCSSClass(position, active)
    
    return (
        <div onClick={(e) => handleTabClick && handleTabClick(id)} className={`${flexBasis} basis-1/4 h-full font-bold text-gray-600 text-center hover:cursor-pointer pl-2 pr-2 pt-2 border-r-2 hover:bg-slate-400 hover:text-slate-100 ${styleClass} text-sm md:text-lg`}>
            {tabName}
        </div>
    );
}

const TabPanel: FunctionComponent<TabPanelProps> = ({ tabs, propagateHandleTabClick }) => {
    const flexBasis = `basis-1/${tabs.length}`;

    return (
        <div className="flex flex-row bg-white shadow rounded-full h-10">
            {tabs.map(tab => {
                const { id, handleTabClick, ...rest } = tab
                return (
                    <Tab handleTabClick={propagateHandleTabClick} flexBasis={flexBasis} key={id} id={id} {...rest} />
                )
            })}
        </div>
    );
}

export default TabPanel;