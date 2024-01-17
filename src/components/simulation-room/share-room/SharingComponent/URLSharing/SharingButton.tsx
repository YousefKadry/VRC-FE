import React from "react"
import CustomButton from "../../../../shared/Button"
import { twJoin } from "tailwind-merge"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faShare} from "@fortawesome/free-solid-svg-icons"
import { HandleShareClick } from "../Hooks/SnackBarStatusDispatcher"

interface SharingButtonProps {
    SharingURL?:string
}

const SharingButton: React.FC <SharingButtonProps> = (
{
    SharingURL,
}) => {
    
    return (
        <CustomButton 
        onClick={()=>HandleShareClick(SharingURL)} 
        className={twJoin(
            "from-RoomButtonGradient1 to-RoomButtonGradient2",
            "w-fit p-[1rem] m-0"
        )}>
            <FontAwesomeIcon
            className="text-white text-3xl"
            icon={faShare}
            />
        </CustomButton>
    )
}

export default SharingButton;