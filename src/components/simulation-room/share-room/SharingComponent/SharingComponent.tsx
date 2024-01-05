import React, { useState, useEffect } from "react";
import QRCodeGen from "./QRCode/QR-Code-Generator"
import URLSharingComponent from "./URLSharing/URLSharingComponent";

interface SharingComponentProps
{
    SharingURL?:string
    RenderQR?:boolean
}

const SharingComponent: React.FC<SharingComponentProps> = ({
  SharingURL,
  RenderQR,
})=> {

  return (
     <div className="flex-col w-full max-w-[460px] p-8 space-y-10">

        {RenderQR===true? 
        <QRCodeGen SharingURL={SharingURL}/>: ""}

        <URLSharingComponent 
        SharingURL={SharingURL}/>
      </div>
  );
}

export default SharingComponent;