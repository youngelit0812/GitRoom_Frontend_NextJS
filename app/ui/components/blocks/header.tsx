import React, { useState } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';

import Banner from '@/app/ui/components/banner';
import EmailSubscribe from '@/app/ui/components/emailSubscribe';
import MenuModal from '@/app/ui/components/menuModal';

import headerAnimation from '@/app/ui/lotties/Header.json';

const Header: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  const openMenuModal = () => setShowModal(true);
  const closeMenuModal = () => {
    console.log('close button clicked');
    setShowModal(false);
  };

  return (
    <>
      <div className="header-top-light" />
      <div className="header-top-light-md" />
      <div className="header-top-light-sm" />
      <div className="header-shadow" />
      <div id="header-left-light1" />
      <div id="header-left-light2" />
      <div id="header-left-light3" />
      {/* <div id="header-left-bottom-shadow" /> */}
      {/* <div id="header-right-bottom-shadow" /> */}
      <Player autoplay className="header-player" loop src={headerAnimation} />
      <div className="z-[19] flex h-full w-full flex-col items-center justify-center">
        <div className="mt-[12px] flex h-full w-[335px] flex-col md:mt-[16px] md:w-[1280px]">
          <Banner openMenuModal={openMenuModal}/>
          <div className="mt-[212px] flex h-[144px] w-[335px] flex-col leading-none md:mt-[64px] md:h-[270px] md:w-[615px]">
            <h1>Grow Your Open-Source Community</h1>
          </div>
          <div className="mt-[24px] flex h-[178px] w-[335px] flex-col leading-[16.8px] md:mt-[90px] md:h-[176px] md:w-[508px] md:leading-[19.2px]">
            <h5>
              Tools to help your grow your open-source repository. Gain more
              visibility, stars, contributions and customers. Get free weekly
              value by registering to the newsletter.
            </h5>
            <EmailSubscribe />
          </div>
        </div>
        <div className="relative z-[19] mt-[108px] flex w-[375px] md:mt-[124px] md:w-[1440px]">
          <div className="slide-image-blur" />
          <img className="slide-image" src="/Logos.png" alt="" />
        </div>
      </div>
      <MenuModal show_flag={showModal} onClose={closeMenuModal} />
    </>
  );
};

export default Header;
