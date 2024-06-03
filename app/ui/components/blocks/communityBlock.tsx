import { useMediaQuery } from 'react-responsive';

import BlockTitle from '@/app/ui/components/blockTitle';
import GitCommunityCardLg from '@/app/ui/components/gitCommunityCardLg';
import GitCommunityCardMd from '@/app/ui/components/gitCommunityCargMd';

import communityAnimation from '@/app/ui/lotties/CommunityDeal.json';
import discordAnimation from '@/app/ui/lotties/Discord.json';
import ossAnimation from '@/app/ui/lotties/Oss.json';
import youtubeAnimation from '@/app/ui/lotties/Youtube.json';

const CommunityBlock: React.FC = () => {
  const isDesktop = useMediaQuery({ minWidth: 768 });

  return (
    <div className="z-[19] mt-[100.2px] flex h-[1585px] w-[375px] flex-col items-center justify-center overflow-x-hidden bg-transparent md:mt-[200px] md:h-[1051px] md:w-[1280px]">
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
      <div className="relative mt-[40px] flex w-full flex-col items-center justify-center space-y-[8px] md:mt-[80.48px] md:flex md:flex-row md:space-y-[0px]">
        <div id="community-left-light" />
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
          marginLeftFlag={isDesktop ? true : false}
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
  );
};

export default CommunityBlock;
