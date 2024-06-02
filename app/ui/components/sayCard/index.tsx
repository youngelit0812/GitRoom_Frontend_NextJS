import Image from 'next/image';

type SayCardProps = {
  titleImageURL: string;
  contents: string;
  sayerName: string;
  contact: string;
  sayerImageURL: string;
};

const SayCard: React.FC<SayCardProps> = ({
  titleImageURL,
  contents,
  sayerName,
  contact,
  sayerImageURL,
}) => {
  return (
    <div className="say-card-wrapper-border">
      <Image src={titleImageURL} width={60} height={80} alt="" />
      <div className="mt-[30px] w-full text-[14px] leading-[16.8px]">
        {contents}
      </div>
      <div className="mt-[30px] flex h-[40px] w-full flex-row">
        <Image src={sayerImageURL} width={40} height={40} alt="" />
        <div className="flex flex-col ml-[12px] flex-grow h-full">
            <span className="font-primary font-semibold text-primary text-[16px] leading-[20.8px]">{sayerName}</span>
            <span className="font-secondary text-primary text-[13px] leading-[15.6px]">{contact}</span>
        </div>
      </div>
    </div>
  );
};

export default SayCard;
