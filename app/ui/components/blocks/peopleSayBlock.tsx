import BlockTitle from '@/app/ui/components/blockTitle';
import SayCardCarousel from '@/app/ui/components/sayCardCarousel';

const PeopleSayBlock:React.FC = () => {
    return (
        <div className="relative mt-[100px] flex h-[560px] w-[375px] flex-col items-center justify-center overflow-x-hidden md:mt-[200px] md:h-[608px] md:w-[1440px]">
          <BlockTitle
            desktopHeight={68}
            desktopWidth={68}
            mobileHeight={50}
            mobileWidth={50}
            titleCaption="What People Say"
            titleDesktopHeight={149}
            titleDesktopWidth={349}
            titleMobileHeight={106}
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