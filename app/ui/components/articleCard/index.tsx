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

const content_title_ellipsis_limit = 37;
const content_ellipsis_limit = 103;

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
          <div className="mb-[27.78px] h-[17.73px] w-[74.35px] md:mb-[26.12px] md:h-[22.22px] md:w-[92.29px]">
            <BannerMark
              imageURL={cardMarkURL}
              desktopHeight={29.33}
              desktopWidth={27.3}
              mobileHeight={23.41}
              mobileWidth={21.78}
              text_type={2}
              leftDesktopMargin={0}
              topDesktopMargin={7}
              leftMobileMargin={0}
              topMobileMargin={7}
            />
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
          <div className="text-1 h-[20px] w-[295px] overflow-x-hidden overflow-y-hidden md:h-[24px] md:w-[380px]">
            {contentTitleCaption.length > content_title_ellipsis_limit
              ? `${contentTitleCaption.substr(
                  0,
                  content_title_ellipsis_limit,
                )}...`
              : contentTitleCaption}
          </div>
          <div className="row mb-[16px] mt-[16px] flex items-center">
            <ProfileAvaName
              avatarURL="/avatar/person.png"
              profileName="Nevo David"
              colDirectionFlag={false}
            />
            <h5 className="leading-[18.2px] text-opacity-80 md:leading-[20.8px]">
              {posted_date}
            </h5>
          </div>
          <div className="text-2 h-[46px] w-[295px] overflow-hidden overflow-ellipsis md:w-[380px]">
            {contentCaption.length > content_ellipsis_limit
              ? `${contentCaption.substr(0, content_ellipsis_limit)}...`
              : contentCaption}
          </div>
        </div>
      </ArticleCardWrapper>
    </div>
  );
};

export default ArticleCard;
