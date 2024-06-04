import { useMediaQuery } from 'react-responsive';
import Image from 'next/image';

import BannerMark from '@/app/ui/components/bannerMark';
import ProfileAvaName from '@/app/ui/components/profileAvaName';
import {
  ArticleCardWrapper,
  ArticleCardTitleWrapper,
} from '@/app/ui/components/articleCard/styles';

type ArticleCardProps = {
  backgourndImageURL?: string;
  cardMarkURL: string;
  titleBgImageURL: string;
  type: boolean; //type : true - first type, false - second type
  titleMainCaption: string;
  titleSubCaption: string;
  contentTitleCaption: string;
  posted_date: string;
  contentCaption: string;
};

const content_title_ellipsis_limit = 35;
const content_ellipsis_limit = 103;

const mobile_content_title_ellipsis_limit = 32;
const mobile_content_ellipsis_limit = 92;

const ArticleCard: React.FC<ArticleCardProps> = ({
  backgourndImageURL,
  cardMarkURL,
  titleBgImageURL,
  type,
  titleMainCaption,
  titleSubCaption,
  contentTitleCaption,
  posted_date,
  contentCaption,
}) => {
  const isDesktop = useMediaQuery({ minWidth: 768 });

  return (
    <div className="article-wrapper-border relative h-[391px] w-[335px] rounded-[4px] md:h-[460px] md:w-[420px]">
      <ArticleCardWrapper
        $backImgURL={backgourndImageURL ? backgourndImageURL : ''}
        className="absolute left-[1px] top-[1px] flex h-[389px] w-[333px] flex-col overflow-hidden rounded-[4px] md:h-[458px] md:w-[418px]"
      >
        <ArticleCardTitleWrapper
          $backImgURL={titleBgImageURL ? titleBgImageURL : ''}
          className="flex h-[209px] w-full flex-col items-center justify-center md:h-[262.45px]"
        >
          <div className="relative mb-[27.78px] h-[17.73px] w-[74.35px] md:mb-[26.12px] md:h-[22.22px] md:w-[92.29px]">
            <Image
              src={cardMarkURL}
              width={27.3}
              height={29.33}
              alt=""
              className={`absolute left-0 top-[-5px] h-[23.41px] w-[21.78px] md:flex md:absolute md:top-[-5px] md:left-0 md:h-[29.33px] md:w-[27.3px]`}
            />
            <div className="text-3 ml-[1px] absolute right-0 bottom-0">Gitroom</div>
          </div>
          {type ? (
            <>
              <div className="resource-article-title-SM-caption">
                {titleMainCaption}
              </div>
              <div className="resource-article-title-LG-caption">
                {titleSubCaption}
              </div>
            </>
          ) : (
            <>
              <div className="resource-article-title-LG-caption">
                {titleMainCaption}
              </div>
              <div className="resource-article-title-SM-caption">
                {titleSubCaption}
              </div>
            </>
          )}
        </ArticleCardTitleWrapper>
        <div className="flex flex-grow flex-col p-[20px]">
          <div className="text-1 h-[20px] w-[295px] md:h-[24px] md:w-[380px] whitespace-nowrap">
            {contentTitleCaption.length > (isDesktop? content_title_ellipsis_limit : mobile_content_title_ellipsis_limit)
              ? `${contentTitleCaption.substr(
                  0,
                  (isDesktop? content_title_ellipsis_limit : mobile_content_title_ellipsis_limit),
                )}...`
              : contentTitleCaption}
          </div>
          <div className="row mb-[16px] mt-[16px] flex items-center space-x-[17.53px]">
            <ProfileAvaName
              avatarURL="/avatar/person.png"
              profileName="Nevo David"
              colDirectionFlag={false}
            />
            <h5 className="leading-[18.2px] text-opacity-80 md:leading-[20.8px]">
              |
            </h5>
            <h5 className="leading-[18.2px] text-opacity-80 md:leading-[20.8px]">
              {posted_date}
            </h5>
          </div>
          <div className="text-2 h-[46px] w-[295px] md:w-[380px]">
            {contentCaption.length > (isDesktop? content_ellipsis_limit : mobile_content_ellipsis_limit)
              ? `${contentCaption.substr(0, (isDesktop? content_ellipsis_limit : mobile_content_ellipsis_limit))}...`
              : contentCaption}
          </div>
        </div>
      </ArticleCardWrapper>
    </div>
  );
};

export default ArticleCard;
