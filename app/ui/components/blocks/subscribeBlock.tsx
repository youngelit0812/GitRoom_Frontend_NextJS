import BlockTitle from '@/app/ui/components/blockTitle';
import EmailSubscribe from '@/app/ui/components/emailSubscribe';

const SubscribeBlock: React.FC = () => {
  return (
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
      <div className="mt-[40px] w-[335px] md:mt-[60px] md:w-[508px]">
        <EmailSubscribe
          smallCaptionDesktopWidth={793}
          smallCaptionMobileWidth={306}
        />
      </div>
    </div>
  );
};

export default SubscribeBlock;
