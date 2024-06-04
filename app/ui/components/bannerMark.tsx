import React from 'react';
import Image from 'next/image';

type BannerMarkProps = {
  imageURL?: string;
  desktopHeight?: number;
  desktopWidth?: number;
  mobileHeight?: number;
  mobileWidth?: number;
  text_type: number;  
  leftDesktopMargin?: number;
  topDesktopMargin?: number;
  leftMobileMargin?: number;
  topMobileMargin?: number;
}

const BannerMark:React.FC<BannerMarkProps> = ({  
  imageURL,
  desktopHeight,
  desktopWidth,
  mobileHeight,
  mobileWidth,
  text_type,
  leftDesktopMargin,
  topDesktopMargin,
  leftMobileMargin,
  topMobileMargin,
}) => {
  return (
    <div className="relative flex w-full h-full">
      {imageURL && (
          <Image
            src={imageURL}
            width={desktopWidth}
            height={desktopHeight}
            alt=""
            className={`absolute left-[-${leftMobileMargin}px] top-[${topMobileMargin}px] h-[${mobileHeight}px] w-[${mobileWidth}px] md:flex md:absolute md:top-[${topDesktopMargin}px] md:left-[-${leftDesktopMargin}px] md:h-[${desktopHeight}px] md:w-[${desktopWidth}px]`}
          />
      )}
      {text_type === 1 ? (
        <h3 className="absolute right-0 bottom-0">Gitroom</h3>
      ) : (
        <div className="text-3 ml-[1px] absolute right-0 bottom-0">Gitroom</div>
      )}      
    </div>
  );
};

export default BannerMark;
