import React from "react";
import URLSharingComponent from "./URLSharing/URLSharingComponent";
import { QRCodeSVG } from "qrcode.react";
import { twJoin } from "tailwind-merge";

interface SharingComponentProps
{
    sharingURL:string
    RenderQR?:boolean
}

const SharingComponent: React.FC<SharingComponentProps> = ({
  sharingURL,
  RenderQR,
})=> {

  return (

    <div className="flex-col w-full max-w-[460px] p-8 space-y-10">

      {RenderQR ? 
        <div className={twJoin(
          "flex justify-center items-center w-90 aspect-[1/0.80] rounded-xl ",
          "bg-gradient-to-tr from-gradientSimulationBox1 to-gradientSimulationBox2 bg-opacity-40 "
        )}
        >

        <QRCodeSVG 
        value={sharingURL}
        fgColor= "#FFFFFF"
        bgColor= "transparent"
        width="100%"
        height="75%"
        />
        </div>

        : null   

      }

      <URLSharingComponent 
      sharingURL={sharingURL}/>

    </div>
  );
}

export default SharingComponent;