import React, { useEffect } from "react"
import { QRCodeSVG } from "qrcode.react"
import QRNotGenerated from "./QRNotGenerated"
import { twJoin } from "tailwind-merge"


interface QRCodeGenProps {
    SharingURL?:string
    setLinkMessage: React.Dispatch<React.SetStateAction<number>>
}

const QRCodeGen: React.FC <QRCodeGenProps> = ({
    SharingURL,
    setLinkMessage
}) =>
{
    useEffect(()=>
    {
        if (SharingURL && SharingURL!=="")
        {
            setLinkMessage(3)
        }
        return ()=>
        {
            setLinkMessage(0)
        }
    }, [SharingURL])


    return (
        <div className={twJoin(
            "flex items-center w-90 aspect-[1/0.80] rounded-xl ",
            "bg-gradient-to-tr from-gradientSimulationBox1 to-gradientSimulationBox2 bg-opacity-40 "
        )}
        >
            {SharingURL && SharingURL!==""? 
            <QRCodeSVG 
            value={SharingURL}
            fgColor= "#FFFFFF"
            bgColor= "transparent"
            width="100%"
            height="75%"
            />:
            <QRNotGenerated/>}
        </div>
    )
}

export default QRCodeGen;