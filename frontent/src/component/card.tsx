import { PeopleIcon } from "../icons/peopleIcon"

export const Card = ({title, value, change}: {
    title: string, 
    value: number,
    change: string
}) => {
    return <div className="grid-1 flex flex-col bg-white rounded-2xl p-4">
        <div className="text-[#656565] pb-2">{title}</div>
        <div className="text-[#567BFF]  text-4xl font-bold pb-2 flex item-center justify-between">
            <div>
                {value}
            </div>
            <div>
                <PeopleIcon/>
            </div>
        </div>
        <div className="">{change}</div>
    </div>
}