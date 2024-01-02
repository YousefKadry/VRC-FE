import React from "react"
import SharingButton from "./SharingButton"
import URLDisplay from "./URLDisplay"

interface URLSharingComponentProps {
    SharingURL?:string
    setLinkMessage: React.Dispatch<React.SetStateAction<number>>
}


const URLSharingComponent: React.FC <URLSharingComponentProps> = ({
    SharingURL,
    setLinkMessage
}) => {

    return (
        <div className="flex items-center justify-between">
            <URLDisplay SharingURL={SharingURL}/>
            <SharingButton SharingURL={SharingURL} setLinkMessage={setLinkMessage}/>
        </div>
    )
}

export default URLSharingComponent;