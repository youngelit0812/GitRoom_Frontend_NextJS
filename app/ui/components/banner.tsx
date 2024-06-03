import Image from 'next/image';

import { Bars3Icon } from '@heroicons/react/24/outline';
import BannerMark from '@/app/ui/components/bannerMark';

type BannerProps = {
  openMenuModal: () => void;
}

const Banner: React.FC<BannerProps> = ({
  openMenuModal
}) => {  
  return (
    <div className="relative banner-wrapper row bg-opacity-35 flex h-[60px] w-[335px] justify-between rounded-[12px] bg-banner p-[16px] md:min-h-[80px] md:w-[1280px] md:rounded-[20px]">
       <Image
            src="/banner_mark.png"
            width={168}
            height={184}
            alt=""
            className={`hidden md:flex md:absolute md:top-[-25px] md:left-[-40px]`}
          />
          <Image
            src="/banner_mark.png"
            width={103.07}
            height={107.22}
            alt=""
            className="absolute top-[-12px] left-[-20px] md:hidden"
          />
      <div className="h-full w-[97.33px] md:w-[145px]">
        <BannerMark          
          desktopHeight={168}
          desktopWidth={184}
          mobileHeight={43.07}
          mobileWidth={47.22}
          text_type={1}              
        />
      </div>
      <div className="row flex">
        <div className="block md:hidden">
          <Bars3Icon className="h-[24px] w-[24px]" onClick={openMenuModal} />
        </div>
        <div className="hidden md:block">
          <div className="row flex items-center justify-center h-[48px] w-[748px]">
            <div className="row mr-[70px] flex space-x-[40px]">
              <h5>Community Deals</h5>
              <h5>Oss Friends</h5>
              <h5>Blog</h5>
            </div>
            <div className="flex space-x-[10px]">
              <div className="radius-button-transparent rounded-[12px] md:h-[48px] md:w-[130px]">
                <h4 className="text-primary">Book a Call</h4>
              </div>
              <div className="radius-button rounded-[12px] md:h-[48px] md:w-[208px]">
                <h4>Discover the Platform</h4>
              </div>
            </div>
          </div>
        </div>
      </div>      
    </div>
  );
}

export default Banner;
