import React, { useState } from 'react';

import { Bars3Icon } from '@heroicons/react/24/outline';
import BannerMark from '@/app/ui/components/bannerMark';
import MenuModal from '@/app/ui/components/menuModal';

const Banner: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  const openMenuModal = () => setShowModal(true);
  const closeMenuModal = () => {
    console.log("close button clicked");
    setShowModal(false);
  }
  return (
    <div className="banner-wrapper row bg-opacity-35 flex h-[60px] w-[335px] justify-between rounded-[12px] bg-banner p-[16px] md:min-h-[80px] md:w-[1280px] md:rounded-[20px]">
      <div className="h-full w-[97.33px] md:w-[145px]">
        <BannerMark
          imageURL="/banner_mark.png"
          desktopHeight={62.03}
          desktopWidth={68}
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
      <MenuModal show_flag={showModal} onClose={closeMenuModal} />
    </div>
  );
}

export default Banner;
