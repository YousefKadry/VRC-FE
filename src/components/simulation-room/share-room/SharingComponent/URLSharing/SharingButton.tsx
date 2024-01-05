import React from "react"
import CustomButton from "../../../../shared/Button"
import { twJoin } from "tailwind-merge"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faShare} from "@fortawesome/free-solid-svg-icons"
import { useDispatch } from "react-redux"
import { storeUISliceActions } from "../../../../../store/slices/ui/ui-slice"

interface SharingButtonProps {
    SharingURL?:string
}

const SharingButton: React.FC <SharingButtonProps> = (
{
    SharingURL,
    
}) => {
    const dispatch = useDispatch()

    function HandleShareClick()
    {
        async function CopyToClipboard(SharingURL:string)
        {
            try {
                await navigator.clipboard.writeText(SharingURL)
                dispatch(storeUISliceActions.setNotification({
                    type:'success',
                    content: "Link Copied to Clipboard"
                }))
            }
            catch (error) {
                console.error('Unable to copy URL to clipboard:', error);
                dispatch(storeUISliceActions.setNotification({
                    type:'error',
                    content: "Error copying link to clipboard"
                }))
            }
        }

        function NoLinkGenerated()
        {
            dispatch(storeUISliceActions.setNotification({
                type:'error',
                content: "No link generated yet"
            }))
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