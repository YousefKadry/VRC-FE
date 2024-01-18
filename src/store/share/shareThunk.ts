import { Dispatch } from "@reduxjs/toolkit"
import { storeUISliceActions } from "../slices/ui/ui-slice"

export const shareThunk = (sharingURL:string) =>
{
    return async (dispatch:Dispatch) =>
    {
        try {
            await navigator.clipboard.writeText(sharingURL)
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
}