import BlockTitle from '@/app/ui/components/blockTitle';
import EmailSubscribe from '@/app/ui/components/emailSubscribe';

const SubscribeBlock: React.FC = () => {
  return (
    <div className="relative mt-[102px] flex w-[375px] flex-col items-center justify-center md:mt-[200px] md:w-[1280px]">
      <div className='subscribe-light-off' />
      <BlockTitle
        desktopHeight={136}
        desktopWidth={131}
        mobileHeight={96}
        mobileWidth={96}
        titleCaption="Subscribe Now to Receive Weekly Tips"
        titleDesktopHeight={208}
        titleDesktopWidth={793}
        titleMobileHeight={170}
        titleMobileWidth={335}
        titleImagePath="/subscribe_tip.png"
      />
      <div className="mt-[40px] w-[335px] md:mt-[60px] md:w-[508px] z-[20]">
        <EmailSubscribe
          smallCaptionDesktopWidth={793}
          smallCaptionMobileWidth={306}
        />
      </div>
    </div>
  );
};

export default SubscribeBlock;
