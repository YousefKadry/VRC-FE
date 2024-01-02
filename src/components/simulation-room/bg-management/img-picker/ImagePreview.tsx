import React from "react";
import { twJoin } from "tailwind-merge";

const ImagePreview: React.FC<{ imagePreviewURL: string }> = ({
  imagePreviewURL,
}) => {
  return (
    <div
      className={twJoin(
        "overflow-hidden w-full aspect-[1/0.85] rounded-xl ring-4 ring-[#6B41A8]",
        "bg-gradient-to-tr from-[#8F68CE] to-[#7D65A0]"
      )}
    >
      {imagePreviewURL && (
        <img
          className="block w-full h-full object-cover"
          src={imagePreviewURL}
          alt=""
        />
      )}
    </div>
  );
};

export default ImagePreview;
