import React from "react"
import { shareThunk } from "../../../../../store/share/shareThunk"
import { TAppDispatch } from "../../../../../store/app-store"
import { useDispatch } from "react-redux"

import CustomButton from "../../../../shared/Button"

import { twJoin } from "tailwind-merge"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faShare} from "@fortawesome/free-solid-svg-icons"


interface SharingButtonProps {
    sharingURL:string
}

const SharingButton: React.FC <SharingButtonProps> = (
{
    sharingURL

}) => {

    const dispatch = useDispatch<TAppDispatch>();

    const onShare = () =>
    {
        dispatch(shareThunk(sharingURL))
    }

    return (
        <CustomButton 
        onClick={onShare} 
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