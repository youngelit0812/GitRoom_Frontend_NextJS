'use client';

import { useMediaQuery } from 'react-responsive';
import Image from 'next/image';
import localFont from 'next/font/local';
import { Player } from '@lottiefiles/react-lottie-player';

import ArticleBlock from '@/app/ui/components/blocks/articleBlock';
import Banner from '@/app/ui/components/banner';
import BlockTitle from '@/app/ui/components/blockTitle';
import CommunityBlock from '@/app/ui/components/blocks/communityBlock';
import EmailSubscribe from '@/app/ui/components/emailSubscribe';
import Footer from '@/app/ui/components/blocks/footer';

import RadiusButton from '@/app/ui/components/radiusButton';
import SayCardCarousel from '@/app/ui/components/sayCardCarousel';
import SubscribeBlock from '@/app/ui/components/blocks/subscribeBlock';

import '@/app/ui/styles/style.scss';

import gridAnimation from '@/app/ui/lotties/Grid.json';
import gridMobileAnimation from '@/app/ui/lotties/Grid-mobile.json';
import headerAnimation from '@/app/ui/lotties/Header.json';
import homeFooterAnimation from '@/app/ui/lotties/HomeFooter.json';

const primaryFont = localFont({
  src: [
    {
      path: './ui/fonts/ChakraPetch-SemiBold.ttf',
      style: 'semibold',
    },
  ],
  variable: '--font-chakrapetch',
});

const secondaryFont = localFont({
  src: [
    {
      path: './ui/fonts/Josefin_Sans_Regular.ttf',
      style: 'normal',
    },
  ],
  variable: '--font-josefin',
});

const Page = () => {
  const isDesktop = useMediaQuery({ minWidth: 768 });

  return (
    <main
      className={`${primaryFont.variable} ${secondaryFont.variable} flex min-h-screen flex-col items-center justify-center sm:overflow-x-hidden`}
    >
      <div
        className="relative flex w-[375px] flex-col items-center justify-center md:w-[1440px]"
        id="top-banner"
      >
        <Image
          src="/desktop_bg.png"
          width={1440}
          height={7313}
          alt=""
          className="hidden md:absolute md:left-0 md:top-0 md:flex"
        />
        <Image
          src="/mobile_bg.png"
          width={375}
          height={7561}
          alt=""
          className="absolute left-0 top-0 flex md:hidden"
        />
        <div className="header-top-light" />
        <div className="header-top-light-md" />
        <div className="header-top-light-sm" />
        <Player autoplay className="header-player" loop src={headerAnimation} />
        <div className="flex h-full w-full flex-col items-center justify-center z-[19]">
          <div className="mt-[12px] flex h-full w-[335px] flex-col md:mt-[16px] md:w-[1280px]">
            <Banner />
            <div className="mt-[212px] flex h-[144px] w-[335px] flex-col leading-none md:mt-[64px] md:h-[270px] md:w-[615px]">
              <h1>Grow Your Open-Source Community</h1>              
            </div>
            <div className="mt-[24px] flex h-[178px] w-[335px] flex-col leading-[16.8px] md:mt-[90px] md:h-[176px] md:w-[508px] md:leading-[19.2px]">
                <h5>
                  Tools to help your grow your open-source repository. Gain more
                  visibility, stars, contributions and customers. Get free
                  weekly value by registering to the newsletter.
                </h5>
                <EmailSubscribe />
              </div>
          </div>
          <div className="flex mt-[108px] w-[375px] overflow-x-hidden md:mt-[124px] md:w-[1440px] z-[19]">
            <img className="slide-image" src="/Logos.png" alt="" />
          </div>
        </div>
      </div>
      <div className="flex w-full flex-col items-center justify-center">
        <ArticleBlock />
        <div className="relative mt-[100px] flex h-[560px] w-[375px] flex-col items-center justify-center overflow-x-hidden md:mt-[200px] md:h-[608px] md:w-[1440px]">
          <BlockTitle
            desktopHeight={68}
            desktopWidth={68}
            mobileHeight={50}
            mobileWidth={50}
            titleCaption="What People Say"
            titleDesktopHeight={149}
            titleDesktopWidth={349}
            titleMobileHeight={106}
            titleMobileWidth={222}
            titleImagePath="/people_say.png"
          />
          <div className="mt-[66px] flex h-[388px] w-full md:mt-[80px] md:h-[379px]">
            <SayCardCarousel />
          </div>
        </div>
        <SubscribeBlock />
        <div className="relative flex h-[698px] w-[375px] flex-col items-center justify-center md:h-[1408px] md:w-[1440px]">
          <div className="absolute top-0">
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
          <div className="mt-[69px] flex h-[630px] w-[351px] flex-col items-center justify-center md:mt-[233px] md:h-[1175px] md:w-full">
            <div className="platform-light" />
            <div className="platform-light1" />
            <div className="platform-light2" />
            <div className="platform-light3" />
            <div className="platform-shadow" />
            <BlockTitle
              desktopHeight={62.03}
              desktopWidth={68}
              mobileHeight={50}
              mobileWidth={50}
              titleCaption="Gitroom Platform"
              titleDesktopHeight={107}
              titleDesktopWidth={355}
              titleMobileHeight={97}
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
        <CommunityBlock />
        <div className="relative mt-[60px] flex h-[413px] w-[375px] flex-col md:mt-[80px] md:h-[800px] md:w-[1440px]">
          <Player
            autoplay
            className="home-footer-player"
            loop
            src={homeFooterAnimation}
          />
          <div className="z-[19] mt-[244px] flex flex-col items-center justify-center md:mt-[591px]">
            <div className="text-4 h-[52px] w-[288px] md:h-[44px] md:w-[917px]">
              Stay informed, subscribe for the newsletter now!
            </div>
            <div className="mt-[24px] w-[335px] md:mt-[45px] md:w-[508px]">
              <EmailSubscribe />
            </div>
          </div>
        </div>        
        <Footer />
      </div>
    </main>
  );
};

export default Page;
