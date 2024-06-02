'use client';

import { useMediaQuery } from 'react-responsive';
import Image from 'next/image';
import localFont from 'next/font/local';
import { Player } from '@lottiefiles/react-lottie-player';

import ArticleCard from '@/app/ui/components/articleCard';
import Banner from '@/app/ui/components/banner';
import BlockTitle from '@/app/ui/components/blockTitle';
import EmailSubscribe from '@/app/ui/components/emailSubscribe';
import GitCommunityCardLg from '@/app/ui/components/gitCommunityCardLg';
import GitCommunityCardMd from '@/app/ui/components/gitCommunityCargMd';
import ProfileAvaName from './ui/components/profileAvaName';
import SayCardCarousel from '@/app/ui/components/sayCardCarousel';
import RadiusButton from '@/app/ui/components/radiusButton';

import '@/app/ui/styles/style.scss';

import communityAnimation from '@/app/ui/lotties/CommunityDeal.json';
import discordAnimation from '@/app/ui/lotties/Discord.json';
import gridAnimation from '@/app/ui/lotties/Grid.json';
import gridMobileAnimation from '@/app/ui/lotties/Grid-mobile.json';
import headerAnimation from '@/app/ui/lotties/Header.json';
import homeFooterAnimation from '@/app/ui/lotties/HomeFooter.json';
import ossAnimation from '@/app/ui/lotties/Oss.json';
import netAnimation from '@/app/ui/lotties/Net.json';
import youtubeAnimation from '@/app/ui/lotties/Youtube.json';

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
      className={`${primaryFont.variable} ${secondaryFont.variable} flex min-h-screen flex-col items-center justify-center`}
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
          src="/desktop_bg.png"
          width={375}
          height={7561}
          alt=""
          className="absolute left-0 top-0 flex md:hidden"
        />
        <div className="header-top-light" />
        <div className="header-top-light-md" />
        <div className="header-top-light-sm" />
        <Player autoplay className="header-player" loop src={headerAnimation} />
        <div className="absolute left-0 top-0 flex h-full w-full flex-col items-center justify-center">
          <div className="mt-[12px] flex h-full w-[335px] flex-col md:mt-[16px] md:w-[1280px]">
            <Banner />
            <div className="mt-[212px] flex h-[144px] w-[335px] flex-col leading-none md:mt-[64px] md:h-[536px] md:w-[615px]">
              <h1>Grow Your Open-Source Community</h1>
              <div className="mt-[24px] flex h-[178px] w-[335px] flex-col leading-[16.8px] md:mt-[90px] md:h-[176px] md:w-[508px] md:leading-[19.2px]">
                <h5>
                  Tools to help your grow your open-source repository. Gain more
                  visibility, stars, contributions and customers. Get free
                  weekly value by registering to the newsletter.
                </h5>
                <EmailSubscribe />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full flex-col items-center justify-center overflow-x-hidden">
        <div className="mt-[108px] w-[375px] overflow-x-hidden md:mt-[20px] md:w-[1440px]">
          <img className="slide-image" src="/Logos.png" alt="" />
        </div>
        <div className="relative mt-[102px] flex w-[375px] flex-col items-center justify-center overflow-x-hidden md:mt-[200px] md:w-[1280px]">
          {/* <div className="resource-article-bg" /> */}
          <div className="absolute top-[162px] md:top-[85px]">
            <Player autoplay className="net-player" loop src={netAnimation} />
          </div>
          <div className="resource-article-main-light" />
          <div className="resource-article-main-light1" />
          <BlockTitle
            desktopHeight={68}
            desktopWidth={68}
            mobileHeight={50}
            mobileWidth={50}
            titleCaption="Stay Informed: Access Free Learning Resources and Articles"
            titleDesktopHeight={188}
            titleDesktopWidth={784.5}
            titleMobileHeight={163}
            titleMobileWidth={335}
            titleImagePath="/access_resource.png"
          />
          <div className="z-[18] mt-[20px] w-[335px] md:w-[523px]">
            <h5 className="text-center">
              Stay ahead of the curve with our newsletter! Receive exclusive
              insights, updates, and tips straight to your inbox, ensuring you
              never miss a beat in the world of development.
            </h5>
          </div>
          <div className="relative mt-[151.11px] flex h-[162px] w-[304px] flex-col items-center justify-center md:mt-[148.64px] md:h-[199px] md:w-[359.69px]">
            <ProfileAvaName
              avatarBgURL="/avatar/bg.png"
              avatarURL="/avatar/person.png"
              profileName="Nevo David"
              colDirectionFlag={true}
            />
            <h5 className="mt-[8px] text-center leading-[16.8px] text-opacity-90 md:mt-[7px] md:leading-[19.2px]">
              Experienced full-stack developer with a decade of expertise.
              Working at Novu, the open-source notification infrastructure
              startup.
            </h5>
          </div>
          <div className="mt-[40.89px] flex w-[335px] flex-col md:mt-[60.36px] md:h-[460.05px] md:w-full md:flex-row md:space-x-[10px]">
            {isDesktop ? (
              <>
                <ArticleCard
                  cardMarkURL="/article_card/card_mark_1.png"
                  titleBgImageURL="/article_card/title_bg_1.png"
                  type={true}
                  titleMainCaption="IN 3 DAYS"
                  titleSubCaption="12,492 VIEWS"
                  contentTitleCaption="I got 12,492 views for my articles in 3 days"
                  posted_date="March 23, 2024"
                  contentCaption="Welcome to all the new newsletter subscribers 🚀 
              Three days ago, I started a launch that resulted in: 
              200 stars
              60 newsletter registration
              I want to say that the launch was super diverse, and many channels helped out. But the truth is, one channel performed 10x better than all the others: DEV.TO 
              This time, it was different; the traffic didn’t come from DEV but from Google!Google (especially for Android) has a unique feed for article suggestions - being on that feed will drive you a lot of traffic. . 
              The primary strategy I used for Novu and every person I talk to is “launches.” A weekly spirit of promoting your platform in every possible channel and push to be trending over GitHub. 
              However, my main problem was that I could never plan my launch ahead.I had to do it manually during the week. Why?"
                />
              </>
            ) : (
              <></>
            )}
            <ArticleCard
              cardMarkURL="/article_card/card_mark_2.png"
              backgourndImageURL="/article_card/bg_2.png"
              titleBgImageURL="/article_card/title_bg_2.png"
              type={false}
              titleMainCaption="GITHUB"
              titleSubCaption="TRENDING FEED"
              contentTitleCaption="Everything I know about the GitHub trending feed"
              posted_date="March 16, 2024"
              contentCaption="Getting into the GitHub trending feed is the dream, especially in higher places. In Novu, we were trending on the top spot for almost a week and got around 7000 stars. You immediately rush with tons of stars, contributors, and Discord members when you are there. The success of many companies relies on this feed."
            />
            {isDesktop ? (
              <>
                <ArticleCard
                  cardMarkURL="/article_card/card_mark_3.png"
                  titleBgImageURL="/article_card/title_bg_3.png"
                  type={true}
                  titleMainCaption="THE GITROOM PLATFORM"
                  titleSubCaption="IS LIVE"
                  contentTitleCaption="The Gitroom Platform is live 🚀"
                  posted_date="March 9, 2024"
                  contentCaption="The Gitroom platform is the best tool for scheduling your open-source launches, and of course, you can also self-host it.  The primary strategy I used for Novu and every person I talk to is “launches.” A weekly spirit of promoting your platform in every possible channel and push to be trending over GitHub.  However, my main problem was that I could never plan my launch ahead.I had to do it manually during the week. Why? But the truth is that only more prominent brands enjoy that (mostly).In Taipy, we have been wildly trying to put our name everywhere, but most of the Reactions we get are: “That’s interesting” or “What’s the difference between you and your competitors?” Taipy is not an established brand—but we will get there. "
                />
              </>
            ) : (
              <></>
            )}
          </div>
          <div className="mt-[40px] md:mt-[60px]">
            <RadiusButton
              desktop_height={48}
              desktop_width={164}
              label="Explore Blog"
              mobile_height={42}
              mobile_width={152}
            />
          </div>
        </div>
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
        <div className="mt-[102px] flex w-[375px] flex-col items-center justify-center overflow-x-hidden md:mt-[200px] md:w-[1280px]">
          <BlockTitle
            desktopHeight={68}
            desktopWidth={68}
            mobileHeight={50}
            mobileWidth={50}
            titleCaption="Subscribe Now to Receive Weekly Tips"
            titleDesktopHeight={140}
            titleDesktopWidth={793}
            titleMobileHeight={124}
            titleMobileWidth={335}
            titleImagePath="/subscribe_tip.png"
          />
          <div className="mt-[40px] md:mt-[60px]">
            <EmailSubscribe />
          </div>
        </div>
        <div className="relative flex h-[698px] w-[375px] flex-col items-center justify-center overflow-hidden md:h-[1408px] md:w-[1440px]">
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
              desktopHeight={68}
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
        <div className="mt-[100.2px] flex h-[1585px] w-[375px] flex-col items-center justify-center overflow-x-hidden md:mt-[200px] md:h-[1051px] md:w-[1280px]">
          <BlockTitle
            desktopHeight={68}
            desktopWidth={68}
            mobileHeight={50}
            mobileWidth={50}
            titleCaption="Join the Gitroom Community"
            titleDesktopHeight={140}
            titleDesktopWidth={592}
            titleMobileHeight={132}
            titleMobileWidth={335}
            titleImagePath="/join_community.png"
          />
          <div className="mt-[40px] flex w-full flex-col items-center justify-center space-y-[8px] md:mt-[80.48px] md:flex md:flex-row md:space-x-[10px] md:space-y-[0px]">
            <GitCommunityCardLg
              backAnimation={ossAnimation}
              buttonCaption="Join Community >"
              caption="OSS Friends"
              content="Connect with community of open-source enthusiasts and collaborators. Share knowledge, seek advice, and foster meaningful relationships with like-minded developers passionate about advancing initiatives."
            />
            <GitCommunityCardLg
              backAnimation={communityAnimation}
              buttonCaption="Explore Deals >"
              caption="Community Deals"
              content="Explore our community features designed to enhance collaboration and engagement. From discussion forums to collaborative projects, discover opportunities to connect, learn, and grow with fellow developers."
            />
          </div>
          <div className="mt-[8px] flex w-full flex-col items-center justify-center space-y-[8px] md:mt-[10px] md:flex md:flex-row md:space-x-[10px] md:space-y-[0px]">
            <GitCommunityCardMd
              backAnimation={discordAnimation}
              buttonCaption="Join the Discord >"
              caption="Join our Discord Server"
              content="Connect with like-minded developers on our Discord server. Share insights, ask questions, and collaborate in real-time within our community."
            />
            <GitCommunityCardMd
              backAnimation={youtubeAnimation}
              buttonCaption="YouTube channel >"
              caption="YouTube channel"
              content="Subscribe to our YouTube channel today for exclusive content, early access to videos and to join a community of enthusiasts."
            />
          </div>
        </div>
        <div className="relative mt-[60px] flex h-[413px] w-[375px] flex-col items-center justify-center overflow-x-hidden md:mt-[80px] md:h-[1241px] md:w-[1440px]">
          <Player
            autoplay
            className="home-footer-player"
            loop
            src={homeFooterAnimation}
          />
        </div>
      </div>
    </main>
  );
};

export default Page;
