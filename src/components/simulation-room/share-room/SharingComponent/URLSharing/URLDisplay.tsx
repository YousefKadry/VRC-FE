import React from "react"
import { twJoin } from "tailwind-merge"

interface SharingButtonProps {
    sharingURL:string
}

const URLDisplay: React.FC <SharingButtonProps> = ({
    sharingURL
}) => {

    return (
        <div className={twJoin("w-80 border border-solid border-purple-700 rounded-lg p-4",
        "bg-gradient-to-r from-gradientSimulationBox1 to-gradientSimulationBox2alt p-[1.2rem] mr-5")}>
            <h5>
                {sharingURL}
            </h5>
        </div>
    )
}

export default URLDisplay;