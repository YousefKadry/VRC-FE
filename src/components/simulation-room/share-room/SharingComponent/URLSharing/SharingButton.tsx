import React from "react"
import CustomButton from "../../../../shared/Button"
import { twJoin } from "tailwind-merge"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faShare} from "@fortawesome/free-solid-svg-icons"

interface SharingButtonProps {
    SharingURL?:string
    setLinkMessage: React.Dispatch<React.SetStateAction<number>>;
}

const SharingButton: React.FC <SharingButtonProps> = (
{
    SharingURL,
    setLinkMessage
    
}) => {
    
    function HandleShareClick()
    {
        async function CopyToClipboard(SharingURL:string)
        {
            try {
                await navigator.clipboard.writeText(SharingURL)
                setLinkMessage(1)
            }
            catch (error) {
                console.error('Unable to copy URL to clipboard:', error);
            }
        }

        function NoLinkGenerated()
        {
            setLinkMessage(2)
        }

        SharingURL && SharingURL!=""?
        CopyToClipboard(SharingURL):
        NoLinkGenerated();
    }

    return (
        <CustomButton 
        onClick={HandleShareClick} 
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