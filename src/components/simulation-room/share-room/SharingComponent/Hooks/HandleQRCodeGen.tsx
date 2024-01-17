import { storeUISliceActions } from "../../../../../store/slices/ui/ui-slice"
import { Dispatch } from "@reduxjs/toolkit"

const HandleQRCodeGenerator=(SharingURL?:string, dispatch?:Dispatch)=>
{
    if (SharingURL && SharingURL!=="" && dispatch)
    {
        dispatch(storeUISliceActions.setNotification({
            type:'success',
            content: "QR Code Generated"
        }))
    }
    
    else if (dispatch)
    {
        dispatch(storeUISliceActions.setNotification({
            type:'info',
            content: "No QR Code Generated yet"
        }))
    }
}

export default HandleQRCodeGenerator;