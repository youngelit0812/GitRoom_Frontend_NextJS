import { useMediaQuery } from 'react-responsive';
import { Player } from '@lottiefiles/react-lottie-player';

import ArticleCard from '@/app/ui/components/articleCard';
import BlockTitle from '@/app/ui/components/blockTitle';
import ProfileAvaName from '@/app/ui/components/profileAvaName';
import RadiusButton from '@/app/ui/components/radiusButton';

import netAnimation from '@/app/ui/lotties/Net.json';

const ArticleBlock: React.FC = () => {
  const isDesktop = useMediaQuery({ minWidth: 768 });

  return (
    <div className="relative mt-[102px] flex w-[375px] flex-col items-center justify-center md:mt-[200px] md:w-[1280px]">
      {/* <div className="resource-article-bg" /> */}
      <div className="absolute top-[329px] md:top-[302px] z-[17]">
        <Player autoplay className="net-player" loop src={netAnimation} />
      </div>
      <div className="resource-article-main-light" />
      <div className="resource-article-main-light1" />
      <div id="article-center-bg" />
      <BlockTitle
        desktopHeight={134}
        desktopWidth={131}
        mobileHeight={96}
        mobileWidth={96}
        titleCaption="Stay Informed: Access Free Learning Resources and Articles"
        titleDesktopHeight={254}
        titleDesktopWidth={784.5}
        titleMobileHeight={209}
        titleMobileWidth={335}
        titleImagePath="/access_resource.png"
      />
      <div className="z-[19] mt-[20px] w-[335px] md:w-[523px]">
        <h5 className="text-center">
          Stay ahead of the curve with our newsletter! Receive exclusive
          insights, updates, and tips straight to your inbox, ensuring you never
          miss a beat in the world of development.
        </h5>
      </div>
      <div className="relative mt-[165.11px] flex h-[162px] w-[304px] flex-col items-center justify-center md:mt-[148.64px] md:h-[199px] md:w-[359.69px] z-[19]">
        <ProfileAvaName
          avatarBgURL="/avatar/bg.png"
          avatarURL="/avatar/person.png"
          profileName="Nevo David"
          colDirectionFlag={true}
        />
        <h5 className="mt-[8px] text-center leading-[16.8px] text-opacity-90 md:mt-[7px] md:leading-[19.2px]">
          Experienced full-stack developer with a decade of expertise. Working
          at Novu, the open-source notification infrastructure startup.
        </h5>
      </div>
      <div className="mt-[40.89px] flex w-[335px] flex-col md:mt-[60.36px] md:h-[460.05px] md:w-full md:flex-row md:space-x-[10px] z-[19]">
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
              I want to say that the launch was super diverse, and many channels helped out. But the truth is, one channel performed 10x better than all the others: DEV.TO
              This time, it was different; the traffic didn't come from DEV but from Google!Google (especially for Android) has a unique feed for article suggestions - being on that feed will drive you a lot of traffic.
              The primary strategy I used for Novu and every person I talk to is 'launches.' A weekly spirit of promoting your platform in every possible channel and push to be trending over GitHub.
              However, my main problem was that I could never plan my launch ahead.I had to do it manually during the week. Why?"
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
              contentCaption="The Gitroom platform is the best tool for scheduling your open-source launches, and of course, you can also self-host it.  The primary strategy I used for Novu and every person I talk to is “launches.” A weekly spirit of promoting your platform in every possible channel and push to be trending over GitHub.  However, my main problem was that I could never plan my launch ahead.I had to do it manually during the week. Why? But the truth is that only more prominent brands enjoy that (mostly).In Taipy, we have been wildly trying to put our name everywhere, but most of the Reactions we get are: “That’s interesting” or “What’s the difference between you and your competitors?”Taipy is not an established brand—but we will get there."
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
  );
};

export default ArticleBlock;
