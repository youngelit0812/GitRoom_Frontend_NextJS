import React from 'react';
import Image from 'next/image';

import {
  TitleContainer,
  TitleImageContainer,
} from '@/app/ui/components/blockTitle/styles';

interface BlockTitleProps {
  desktopHeight: number;
  desktopWidth: number;
  mobileHeight: number;
  mobileWidth: number;
  titleCaption: string;
  titleDesktopHeight: number;
  titleDesktopWidth: number;
  titleMobileHeight: number;
  titleMobileWidth: number;
  titleImagePath: string;  
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
      <TitleImageContainer
        $desktopHeight={desktopHeight}
        $desktopWidth={desktopWidth}
        $mobileHeight={mobileHeight}
        $mobileWidth={mobileWidth}
      >
        <Image
          src={titleImagePath}
          width={desktopWidth}
          height={desktopHeight}
          alt=""
          className="hidden md:flex"
        />
        <Image
          src={titleImagePath}
          width={mobileWidth}
          height={mobileHeight}
          alt=""
          className="flex md:hidden"
        />
      </TitleImageContainer>
      <div className="block-title-caption leading-[30.8px] md:leading-[48.4px] mt-[20px] md:mt-[24px]">{titleCaption}</div>
    </TitleContainer>
  );
};

export default BlockTitle;
