import React, { useState, useEffect } from "react";
import QRCodeGen from "./QRCode/QR-Code-Generator"
import URLSharingComponent from "./URLSharing/URLSharingComponent";
import LinkMessageDisplay from "./LinkMessage/LinkMessageDisplay";

interface SharingComponentProps
{
    SharingURL?:string
    RenderQR?:boolean
    ShowMessage?:boolean
}

const SharingComponent: React.FC<SharingComponentProps> = ({
  SharingURL,
  RenderQR,
  ShowMessage
})=> {

  const [LinkMessage, setLinkMessage] = useState(0)

  useEffect(() => {
    const timeout = setTimeout(() => {
        setLinkMessage(0);
    }, 2000);

    return () => clearTimeout(timeout);

},[LinkMessage])

  return (
     <div className="flex-col w-full max-w-[460px] p-8 space-y-10">

        {RenderQR===true? 
        <QRCodeGen SharingURL={SharingURL} setLinkMessage = {setLinkMessage}/>: ""}

        <URLSharingComponent 
        SharingURL={SharingURL} setLinkMessage = {setLinkMessage}/>

        {ShowMessage==true ? 
        <LinkMessageDisplay LinkMessage={LinkMessage}/> : ""}

      </div>
  );
}

export default SharingComponent;