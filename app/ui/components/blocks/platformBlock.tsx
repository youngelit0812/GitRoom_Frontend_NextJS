import { useMediaQuery } from 'react-responsive';
import Image from 'next/image';
import { Player } from '@lottiefiles/react-lottie-player';

import BlockTitle from '@/app/ui/components/blockTitle';
import RadiusButton from '@/app/ui/components/radiusButton';

import gridAnimation from '@/app/ui/lotties/Grid.json';
import gridMobileAnimation from '@/app/ui/lotties/Grid-mobile.json';

const PlatformBlock:React.FC = () => {
    const isDesktop = useMediaQuery({ minWidth: 376 });

    return (
        <>
        <div className="relative flex h-[698px] w-[375px] flex-col items-center justify-center md:h-[1408px] md:w-[1440px]">
          <div className="absolute top-[50px]">
            {isDesktop ? (
              <>
                <Player
                  autoplay
                  className="grid-player"
                  loop
                  src={gridAnimation}
                />
              </>
            ) : (
              <>
                <Player
                  autoplay
                  className="grid-mobile-player"
                  loop
                  src={gridMobileAnimation}
                />
              </>
            )}
          </div>
          <div className="mt-[209px] pt-[10px] flex w-[351px] flex-col items-center justify-center md:mt-[233px] md:w-full">
            <div className="platform-light" />
            <div className="platform-light1" />
            <div className="platform-light2" />
            <div className="platform-light3" />
            <div className="platform-shadow" />
            <BlockTitle
              desktopHeight={168}
              desktopWidth={184}
              mobileHeight={123}
              mobileWidth={135}
              titleCaption="Gitroom Platform"
              titleDesktopHeight={207}
              titleDesktopWidth={355}
              titleMobileHeight={160}
              titleMobileWidth={335}
              titleImagePath="/banner_mark.png"
            />
            <div className="z-[19] mt-[20px] w-[319px] text-center md:mt-[16px] md:w-[682px]">
              <h5>
                Boost your open-source project's visibility and growth: trend on
                GitHub, leverage influencers, write compelling marketing
                materials. Master communication, find writers, use badges.
              </h5>
            </div>
            <div className="z-[19] mt-[35.2px] md:mt-[48px]">
              <RadiusButton
                desktop_height={48}
                desktop_width={164}
                label="Get Started"
                mobile_height={42}
                mobile_width={152}
              />
            </div>
            <div className="z-[19] mt-[40.2px] md:mt-[91px]">
              <Image
                src="/platform/desktop_shot.png"
                width={1150}
                height={712}
                alt=""
                className="hidden md:flex"
              />
              <Image
                src="/platform/mobile_shot.png"
                width={330}
                height={299}
                alt=""
                className="flex md:hidden"
              />
            </div>
          </div>
        </div>
        </>
    );
}

export default PlatformBlock;
