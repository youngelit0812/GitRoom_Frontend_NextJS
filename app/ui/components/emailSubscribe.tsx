type EmailSubscribeProps = {
  smallCaptionDesktopWidth?: number;
  smallCaptionMobileWidth?: number;
}

const EmailSubscribe:React.FC<EmailSubscribeProps> = ({ 
  smallCaptionDesktopWidth,
  smallCaptionMobileWidth
}) => {
  return (
    <div className="mt-[20px] flex h-[90px] w-full flex-col leading-[14.4px] md:mt-[30px] md:h-[89px] md:leading-[16.8px] text-center">
      <div className="relative mb-[12px] h-[50px] w-full md:mb-[16px] md:h-[56px]">
        <input
          className="peer block h-[50px] w-full rounded-[16px] bg-secondary pl-[20px] text-[14px] text-primary placeholder:text-placeholder md:h-[56px] md:pl-[24px] md:text-[16px]"
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
      <h6 className={`w-[${smallCaptionMobileWidth}px] md:w-[${smallCaptionDesktopWidth}px]`}>
        * Add your email, a video of getting the first 1,000 stars will be sent
        to your email
      </h6>
    </div>
  );
};

export default EmailSubscribe;
