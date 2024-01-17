import { useDispatch } from "react-redux";
import { storeUISliceActions } from "../../../../../store/slices/ui/ui-slice";

const dispatch = useDispatch();

export async function CopyToClipboard(SharingURL:string)
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