import { storeUISliceActions } from "../../../../../store/slices/ui/ui-slice";
import CopyToClipboard from "./CopyToClipBoard";
import { Dispatch } from "@reduxjs/toolkit";

const HandleShareClick = (SharingURL?:string,  dispatch?:Dispatch) =>
{
    if (SharingURL && SharingURL!=="")
    {
        CopyToClipboard(SharingURL, dispatch)
    }
    else
    {
        dispatch? dispatch(storeUISliceActions.setNotification({
            type:'error',
            content: "No link generated yet"
        })): ""
    }
}

export default HandleShareClick;