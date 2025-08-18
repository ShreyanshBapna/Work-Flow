import type { ReactElement } from "react"


export const Button = ({StartIcon ,heading, onClick}: {
    StartIcon?: ReactElement,
    heading: string,
    onClick?: () => void
}) => {
    return  <div className="flex items-center justify-around bg-[#567BFF] rounded-md text-white p-3  cursor-pointer">
        <button className="flex items-center cursor-pointer " onClick={onClick}>
            <div className="mr-2">
                {StartIcon}
            </div>
            <div>
                {heading}
            </div>
            
        </button>
    </div> 
}