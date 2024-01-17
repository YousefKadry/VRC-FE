import { storeUISliceActions } from "../../../../../store/slices/ui/ui-slice";
import { Dispatch } from "@reduxjs/toolkit";

async function CopyToClipboard(SharingURL:string, dispatch?:Dispatch)
{
    try {
        await navigator.clipboard.writeText(SharingURL)
        dispatch ? dispatch(storeUISliceActions.setNotification({
            type:'success',
            content: "Link Copied to Clipboard"
        })) : ""
    }

    catch (error) {
        console.error('Unable to copy URL to clipboard:', error);
        dispatch? dispatch(storeUISliceActions.setNotification({
            type:'error',
            content: "Error copying link to clipboard"
        })): ""
    }
}

export default CopyToClipboard;