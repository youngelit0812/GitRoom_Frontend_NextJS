import { Player } from '@lottiefiles/react-lottie-player';

type GitCommunityCardMdProps = {
  backAnimation: object;
  buttonCaption: string;
  caption: string;
  content: string;
};

const GitCommunityCardMd: React.FC<GitCommunityCardMdProps> = ({
  backAnimation,
  buttonCaption,
  caption,
  content,  
}) => {
  return (
    <div className="relative border border-borderColor h-[280px] w-[335px] overflow-x-hidden md:h-[300px] md:w-[635px]">
      <Player
        autoplay
        className="git-community-card-md-animation"
        loop
        src={backAnimation}
      />
      <div className="absolute left-[24px] sm:top-[30px] w-[287px] md:left-[40px] md:top-[99px] md:w-[365.5px]">
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

export default GitCommunityCardMd;
