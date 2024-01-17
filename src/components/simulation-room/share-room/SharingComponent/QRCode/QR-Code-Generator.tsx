import React, { useEffect } from "react"
import { QRCodeSVG } from "qrcode.react"
import QRNotGenerated from "./QRNotGenerated"
import HandleQRCodeGenerator from "../Hooks/HandleQRCodeGen"
import { twJoin } from "tailwind-merge"
import { useDispatch } from "react-redux"


interface QRCodeGenProps {
    SharingURL?:string
}

const QRCodeGen: React.FC <QRCodeGenProps> = ({
    SharingURL,
}) =>

{
    const dispatch = useDispatch()

    useEffect(()=>
    {
        HandleQRCodeGenerator(SharingURL, dispatch);

    }, [SharingURL])


    return (
        <div className={twJoin(
            "flex justify-center items-center w-90 aspect-[1/0.80] rounded-xl ",
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