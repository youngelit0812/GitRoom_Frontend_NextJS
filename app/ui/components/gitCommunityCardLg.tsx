import { Player } from '@lottiefiles/react-lottie-player';

type GitCommunityCardLgProps = {
  backAnimation: object;
  buttonCaption: string;
  caption: string;
  content: string;
  marginLeftFlag?: boolean;
};

const GitCommunityCardLg: React.FC<GitCommunityCardLgProps> = ({
  backAnimation,
  buttonCaption,
  caption,
  content,
  marginLeftFlag,
}) => {
  return (
    <div className={`relative bg-community-mbLgBg md:bg-community-dtLgBg h-[415px] w-[335px] overflow-x-hidden md:h-[520px] md:w-[635px] ${marginLeftFlag ? "md:ml-[10px]" : ""}`}>
      <Player
        autoplay
        className="git-community-card-animation"
        loop
        src={backAnimation}
      />
      <div className="absolute left-[24px] bottom-[24px] w-[287px] md:left-[40px] md:bottom-[40px] md:w-[539.57px]">
        <div className='git-community-card-caption'>
          {caption}
        </div>
        <div className='git-community-card-content mt-[20px] md:mt-[24px]'>
          {content}
        </div>
        <div className='git-community-card-button-caption mt-[16px] md:mt-[20px]'>
          {buttonCaption}
        </div>
      </div>
    </div>
  );
};

export default GitCommunityCardLg;
