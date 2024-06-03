import Image from 'next/image';
import BannerMark from '@/app/ui/components/bannerMark';

const Footer: React.FC = () => {
  return (
    <div className="mt-[80px] flex h-[736.71px] w-[375px] flex-col items-center px-[20px] py-[40px] sm:text-center md:mt-[60px] md:h-[288px] md:w-[1440px] md:pb-[32px] md:pl-[80px] md:pr-[80px] md:pt-[64px] md:text-justify">
      <div className="flex h-[358.71px] w-[226px] justify-between sm:flex-col md:h-[68px] md:h-full md:w-full md:flex-row">
        <div className="flex h-[74.71px] w-full flex-col space-y-[16px] md:h-full md:w-[259px] md:space-y-[10px]">
          <div className="font-primary text-[23.8px] font-semibold leading-[30.94px] text-primary md:text-[26.47px] md:leading-[34.41px]">
            <BannerMark          
              desktopHeight={168}
              desktopWidth={184}
              mobileHeight={43.07}
              mobileWidth={47.22}
              text_type={1}              
            />
          </div>
          <h5 className="leading-[24px]">Grow your open-source community</h5>
        </div>
        <div className="flex h-[224px] w-[200px] sm:flex-col sm:space-x-0 sm:space-y-[40px] md:mt-[4px] md:h-[60px] md:w-[656px] md:flex-row md:space-x-[60px] md:space-y-0 items-center">
          <div className="flex h-[48px] w-[200px] flex-col space-y-[12px] md:h-full md:space-y-[20px]">
            <div className="text-[18px] font-medium leading-[21.6px] text-primary md:text-[20px] md:leading-[24px]">
              Need consulting?
            </div>
            <div className="text-fourth text-[14px] leading-[14px] md:text-[16px] md:leading-[16px]">
              Book a Free Call
            </div>
          </div>
          <div className="flex h-[48px] w-[201px] flex-col space-y-[12px] md:h-full md:space-y-[20px]">
            <div className="text-[18px] font-medium leading-[21.6px] text-primary md:text-[20px] md:leading-[24px]">
              Launching a product?
            </div>
            <div className="text-fourth text-[14px] leading-[14px] md:text-[16px] md:leading-[16px]">
              Grow Chief
            </div>
          </div>
          <div className="flex h-[48px] w-[121px] flex-col space-y-[12px] md:h-full md:w-[135px] md:space-y-[20px]">
            <div className="text-[18px] font-medium leading-[21.6px] text-primary md:text-[20px] md:leading-[24px]">
              GitHub Library
            </div>
            <div className="text-fourth text-[14px] leading-[14px] md:text-[16px] md:leading-[16px]">
              Visit Website
            </div>
          </div>
        </div>
      </div>
      <div className="border-fifth mt-[40px] box-border flex h-[258px] w-full items-center justify-between border-t-[1px] pt-[32px] sm:flex-col-reverse md:mt-[48px] md:h-[76px] md:flex-row">
        <div className="flex h-[54px] w-[217px] items-center sm:flex-col-reverse sm:space-x-0 sm:space-y-[12px] md:h-full md:w-[492px] md:flex-row md:space-x-[40px] md:space-y-0">
          <div className="text-[13px] leading-[13px] text-primary md:text-[15px] md:leading-[15px]">
            © Gitroom , 2024. All rights reserved.
          </div>
          <div className="flex flex-row items-center space-x-[2px]">
            <div className="text-[14px] text-[15px] leading-[14px] leading-[15px] text-primary">
              Designed by
            </div>
            <div className="h-[24px] w-[102.12px]">
              <Image
                width={102.12}
                height={24}
                alt=""
                src="/footer/pepper.png"
              />
            </div>
          </div>
        </div>
        <div className="flex h-[40px] w-[190px] flex-row space-x-[10px] md:h-full md:w-[206px]">
          <div className="h-[40px] w-[40px] md:h-[44px] md:w-[44px]">
            <Image
              width={44}
              height={44}
              alt=""
              src="/footer/socials-1.png"
              className="hidden md:flex"
            />
            <Image
              width={40}
              height={40}
              alt=""
              src="/footer/socials-1.png"
              className="flex md:hidden"
            />
          </div>
          <div className="h-[40px] w-[40px] md:h-[44px] md:w-[44px]">
            <Image
              width={44}
              height={44}
              alt=""
              src="/footer/socials-2.png"
              className="hidden md:flex"
            />
            <Image
              width={40}
              height={40}
              alt=""
              src="/footer/socials-2.png"
              className="flex md:hidden"
            />
          </div>
          <div className="h-[40px] w-[40px] md:h-[44px] md:w-[44px]">
            <Image
              width={44}
              height={44}
              alt=""
              src="/footer/socials-3.png"
              className="hidden md:flex"
            />
            <Image
              width={40}
              height={40}
              alt=""
              src="/footer/socials-3.png"
              className="flex md:hidden"
            />
          </div>
          <div className="h-[40px] w-[40px] md:h-[44px] md:w-[44px]">
            <Image
              width={44}
              height={44}
              alt=""
              src="/footer/socials-4.png"
              className="hidden md:flex"
            />
            <Image
              width={40}
              height={40}
              alt=""
              src="/footer/socials-4.png"
              className="flex md:hidden"
            />
          </div>
        </div>
        <div className="flex h-[60px] sm:flex-col sm:space-x-0 sm:space-y-[12px] md:mt-[10px] md:h-full md:flex-row md:space-x-[60px] md:space-y-0">
          <div className="text-[14px] leading-[24px] text-primary md:text-[16px]">
            Terms of service
          </div>
          <div className="text-[14px] leading-[24px] text-primary md:text-[16px]">
            Privacy Policy
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
