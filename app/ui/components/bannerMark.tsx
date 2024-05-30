import React from 'react';
import Image from 'next/image';

const BannerMark = () => {
  return (
    <div className="row flex h-full w-[97.33px] items-center justify-center leading-none md:w-[145px]">
      <Image
        src="/banner_mark.png"
        width={68}
        height={62.03}
        alt=""
        className="hidden md:block"
      />
      <Image
        src="/banner_mark.png"
        width={47.22}
        height={43.07}
        alt=""
        className="block md:hidden"
      />
      <h3>Gitroom</h3>
    </div>
  );
};

export default BannerMark;
