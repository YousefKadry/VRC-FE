import { useDispatch } from "react-redux";
import { storeUISliceActions } from "../../../../../store/slices/ui/ui-slice";
import { CopyToClipboard } from "./CopyToClipBoard";


const dispatch = useDispatch()

export function HandleShareClick(SharingURL?:string)
{
    if (SharingURL && SharingURL!=="")
    {
        CopyToClipboard(SharingURL)
    }
    else
    {
        dispatch(storeUISliceActions.setNotification({
            type:'error',
            content: "No link generated yet"
        }))
    }
}


export function HandleQRCodeGenerator(SharingURL?:string)
{
    if (SharingURL && SharingURL!=="")
    {
        dispatch(storeUISliceActions.setNotification({
            type:'success',
            content: "QR Code Generated"
        }))
    }
    else
    {
        dispatch(storeUISliceActions.setNotification({
            type:'info',
            content: "No QR Code Generated yet"
        }))
    }
}