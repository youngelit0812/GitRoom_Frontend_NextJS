import React from 'react';
import Image from 'next/image';

import {
  TitleContainer,
  TitleImageContainer,
} from '@/app/ui/components/blockTitle/styles';

interface BlockTitleProps {
  desktopHeight?: number;
  desktopWidth?: number;
  mobileHeight?: number;
  mobileWidth?: number;
  titleCaption: string;
  titleDesktopHeight: number;
  titleDesktopWidth: number;
  titleMobileHeight: number;
  titleMobileWidth: number;
  titleImagePath?: string;
}

const BlockTitle: React.FC<BlockTitleProps> = ({
  desktopHeight,
  desktopWidth,
  mobileHeight,
  mobileWidth,
  titleCaption,
  titleDesktopHeight,
  titleDesktopWidth,
  titleMobileHeight,
  titleMobileWidth,
  titleImagePath,
}) => {
  return (
    <TitleContainer
      $desktopHeight={titleDesktopHeight}
      $desktopWidth={titleDesktopWidth}
      $mobileHeight={titleMobileHeight}
      $mobileWidth={titleMobileWidth}
    >
      {titleImagePath &&
        desktopHeight &&
        desktopWidth &&
        mobileHeight &&
        mobileWidth && (
          <>
            <Image
                src={titleImagePath}
                width={desktopWidth}
                height={desktopHeight}
                alt=""
                className={`hidden md:flex md:absolute md:left-[calc(50%) - ${desktopWidth / 2}px] md:top-0 z-[21]`}
              />
            <Image
              src={titleImagePath}
              width={mobileWidth}
              height={mobileHeight}
              alt=""
              className={`absolute flex left-[calc(50%) - ${mobileWidth / 2}px] top-0 z-[21] md:hidden`}
            />       
          </>
        )}
      <div className="block-title-caption leading-[30.8px] md:leading-[48.4px]">
        {titleCaption}
      </div>
    </TitleContainer>
  );
};

export default BlockTitle;
