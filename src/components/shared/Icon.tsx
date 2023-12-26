import React from 'react';

interface IconProps {
  alt: string;
  src: string;
}

const Icon: React.FC<IconProps> = ({ alt, src }) => {
  return (
    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
      <img src={src} alt={alt} />
    </div>
  );
};

export default Icon;
