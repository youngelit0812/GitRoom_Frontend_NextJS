"use client"

import localFont from 'next/font/local';

import Banner from '@/app/ui/components/banner';
import HeaderAnimation from '@/app/ui/components/headerAnimation';
import headerAnimation from '@/app/ui/lotties/Header.json';
import { Player } from '@lottiefiles/react-lottie-player';
import '@/app/ui/styles/style.scss';

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
  return (
    <main
      className={`${primaryFont.variable} ${secondaryFont.variable} flex min-h-screen flex-col items-center justify-center`}
    >
      <div
        className="flex h-[630px] w-[375px] flex-col items-center justify-center md:h-[800px] md:w-[1440px] overflow-x-hidden relative"
        id="top-banner"
      >
        <div className="header-top-light" />
        <div className="header-top-light-md" />
        <div className="header-top-light-sm" />
        <Player
          autoplay
          className="header-player"
          loop
          src={headerAnimation}
        />
        <div className="absolute  flex flex-col left-0 top-0 h-full items-center justify-center w-full">
          <div className="mt-[12px] flex h-full w-[335px] flex-col md:mt-[16px] md:w-[1280px]">
            <Banner />
            <div className="mt-[212px] flex h-[144px] w-[335px] flex-col leading-none md:mt-[64px] md:h-[536px] md:w-[615px]">
              <h1>Grow Your Open-Source Community</h1>
              <div className="mt-[24px] flex h-[178px] w-[335px] flex-col leading-[16.8px] md:mt-[90px] md:h-[176px] md:w-[508px] md:leading-[19.2px]">
                <h5>
                  Tools to help your grow your open-source repository. Gain more
                  visibility, stars, contributions and customers. Get free weekly
                  value by registering to the newsletter.
                </h5>
                <div className="mt-[20px] flex h-[90px] w-full flex-col leading-[14.4px] md:mt-[30px] md:h-[89px] md:leading-[16.8px]">
                  <div className="relative mb-[12px] h-[50px] w-full md:mb-[16px] md:h-[56px]">
                    <input
                      className="peer block h-[50px] w-full rounded-[16px] bg-secondary pl-[20px] font-secondary text-[14px] text-primary placeholder:text-placeholder md:h-[56px] md:pl-[24px] md:text-[16px]"
                      id="email"
                      type="email"
                      name="email"
                      placeholder="Enter your e-mail"
                      required
                    />
                    <div className="radius-button absolute right-[4px] top-[4px] h-[42px] w-[140px] rounded-[12px] md:h-[48px] md:w-[164px]">
                      <h4>Subscribe</h4>
                    </div>
                  </div>
                  <h6>
                    * Add your email, a video of getting the first 1,000 stars
                    will be sent to your email
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full flex-col items-center justify-center overflow-x-hidden">
        <div className="w-[375px] mt-[108px] md:mt-[20px] md:w-[1440px] overflow-x-hidden">
          <img className="slide-image" src="/Logos.png" alt="" />
        </div>
      </div>
    </main>
  );
}

export default Page;