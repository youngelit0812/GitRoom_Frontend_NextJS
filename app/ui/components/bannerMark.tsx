import React from 'react';
import Image from 'next/image';

type BannerMarkProps = {
  imageURL: string;
  desktopHeight: number;
  desktopWidth: number;
  mobileHeight: number;
  mobileWidth: number;
  text_type: number;
}

const BannerMark:React.FC<BannerMarkProps> = ({  
  imageURL,
  desktopHeight,
  desktopWidth,
  mobileHeight,
  mobileWidth,
  text_type,
}) => {
  return (
    <div className="row flex h-full w-full items-center justify-center leading-none ">
      <Image
        src={imageURL}
        width={desktopWidth}
        height={desktopHeight}
        alt=""
        className="hidden md:block"
      />
      <Image
        src={imageURL}
        width={mobileWidth}
        height={mobileHeight}
        alt=""
        className="block md:hidden"
      />
      {text_type === 1 ? (
        <h3>Gitroom</h3>
      ) : (
        <div className="text-3 ml-[1px]">Gitroom</div>
      )}
      
    </div>
  );
};

export default BannerMark;
