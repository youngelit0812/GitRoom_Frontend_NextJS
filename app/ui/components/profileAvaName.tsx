import React from 'react';
import Image from 'next/image';

type ProfileAvaNameProps = {
  avatarBgURL?: string;
  avatarURL: string;
  profileName: string;
  colDirectionFlag: boolean;
};

const ProfileAvaName: React.FC<ProfileAvaNameProps> = ({
  avatarBgURL,
  avatarURL,
  profileName,
  colDirectionFlag,
}) => {
  return (
    <>
      {colDirectionFlag ? (
        <>
          <div className="flex h-[103px] w-[115px] flex-col items-center justify-center md:h-[135px] md:w-[138px]">
            <div className="relative mb-[15px] h-[64px] w-[64px] md:mb-[20px] md:h-[86px] md:w-[86px]">
              {avatarBgURL && (
                <>
                  <Image
                    src={avatarBgURL}
                    width={86}
                    height={86}
                    alt=""
                    className="hidden md:flex"
                  />
                  <Image
                    src={avatarBgURL}
                    width={64}
                    height={64}
                    alt=""
                    className="flex md:hidden"
                  />
                </>
              )}
              <Image
                src={avatarURL}
                width={77}
                height={77}
                alt=""
                className="hidden md:absolute md:left-[4.5px] md:top-[4.5px] md:flex"
              />
              <Image
                src={avatarURL}
                width={56}
                height={56}
                alt=""
                className="flex absolute left-[4.25px] top-[4.25px] md:hidden"
              />
            </div>
            <h3 className="font-semibold">{profileName}</h3>
          </div>
        </>
      ) : (
        <>
          <div className="row flex h-[34px] items-center justify-center space-x-[9.64px] md:w-[145px]">
            <Image
              src={avatarURL}
              width={40}
              height={40}
              alt=""
              className="hidden md:flex"
            />
            <Image
              src={avatarURL}
              width={34}
              height={34}
              alt=""
              className="flex md:hidden"
            />
            <h5 className="leading-[18.2px] text-opacity-80 md:leading-[20.8px]">
              {profileName}
            </h5>
          </div>
        </>
      )}
    </>
  );
};

export default ProfileAvaName;
