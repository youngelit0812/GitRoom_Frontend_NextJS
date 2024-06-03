'use client';

import Image from 'next/image';
import localFont from 'next/font/local';

import ArticleBlock from '@/app/ui/components/blocks/articleBlock';
import CommunityBlock from '@/app/ui/components/blocks/communityBlock';
import Footer from '@/app/ui/components/blocks/footer';
import GlobalBlock from '@/app/ui/components/blocks/globalBlock';
import Header from '@/app/ui/components/blocks/header';
import PeopleSayBlock from '@/app/ui/components/blocks/peopleSayBlock';
import PlatformBlock from '@/app/ui/components/blocks/platformBlock';
import SubscribeBlock from '@/app/ui/components/blocks/subscribeBlock';

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
        <Header />
      </div>
      <div className="flex w-full flex-col items-center justify-center">
        <ArticleBlock />
        <PeopleSayBlock />
        <SubscribeBlock />
        <PlatformBlock />
        <CommunityBlock />
        <GlobalBlock />
        <Footer />
      </div>
    </main>
  );
};

export default Page;
