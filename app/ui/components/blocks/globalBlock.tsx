import { Player } from '@lottiefiles/react-lottie-player';

import EmailSubscribe from '@/app/ui/components/emailSubscribe';
import homeFooterAnimation from '@/app/ui/lotties/HomeFooter.json';

const GlobalBlock: React.FC = () => {
  return (
    <div className="relative mt-[60px] flex h-[413px] w-[375px] flex-col md:mt-[80px] md:h-[800px] md:w-[1440px]">
      <div id="global-light-off" />
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
  );
};

export default GlobalBlock;
