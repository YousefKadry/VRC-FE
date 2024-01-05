import React from "react"
import SharingButton from "./SharingButton"
import URLDisplay from "./URLDisplay"

interface URLSharingComponentProps {
    SharingURL?:string
}


const URLSharingComponent: React.FC <URLSharingComponentProps> = ({
    SharingURL,
}) => {

    return (
        <div className="flex items-center justify-between">
            <URLDisplay SharingURL={SharingURL}/>
            <SharingButton SharingURL={SharingURL}/>
        </div>
    )
}

export default URLSharingComponent;