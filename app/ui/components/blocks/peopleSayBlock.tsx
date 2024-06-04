import BlockTitle from '@/app/ui/components/blockTitle';
import SayCardCarousel from '@/app/ui/components/sayCardCarousel';

const PeopleSayBlock:React.FC = () => {
    return (
        <div className="relative mt-[100px] flex w-[375px] flex-col items-center justify-center overflow-x-hidden md:mt-[200px] md:w-[1440px]">
          <BlockTitle
            desktopHeight={132}
            desktopWidth={132}
            mobileHeight={96}
            mobileWidth={96}
            titleCaption="What People Say"
            titleDesktopHeight={213}
            titleDesktopWidth={349}
            titleMobileHeight={152}
            titleMobileWidth={222}
            titleImagePath="/people_say.png"
          />
          <div className="mt-[66px] flex h-[388px] md:mt-[80px] md:h-[379px]">
            <SayCardCarousel />
          </div>
        </div>
    )
}

export default PeopleSayBlock;