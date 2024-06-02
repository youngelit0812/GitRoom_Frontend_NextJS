import { useEffect, useRef, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import Image from 'next/image';
import SayCard from '@/app/ui/components/sayCard';

import {
  CardContainer
} from '@/app/ui/components/sayCardCarousel/styles';

const slideDataList = [
  {
    id: 0,
    titleImageURL: '/say_card/mark_1.png',
    contents:
      'Nevo is an outstanding Growth Engineer. He really understands how to create traction around a developer products and his results speak for themselves!',
    personName: 'Guillermo Rauch',
    personContact: 'COO @ Medusa',
    personImageURL: '/say_card/person_1.png',
  },
  {
    id: 1,
    titleImageURL: '/say_card/mark_2.png',
    contents:
      'Nevo has achieved great growth for Novu in a remarkably short time. His creative, and practical strategies have resulted in immediate and tangible results.',
    personName: 'Tomer Barnea',
    personContact: 'CEO @ Novu',
    personImageURL: '/say_card/person_2.png',
  },
  {
    id: 2,
    titleImageURL: '/say_card/mark_3.png',
    contents:
      'The content is clear, creative and practical, and can have an immediate impact, highly recommend to anyone looking to grow their Github library.',
    personName: 'Zevi Reinitz',
    personContact: 'Head of Product Marketing @ Livecycle',
    personImageURL: '/say_card/person_3.png',
  },
  {
    id: 3,
    titleImageURL: '/say_card/mark_4.png',
    contents:
      "Nevo's knowledge and expertise in building communities, engaging with developers, and reaching out to them wherever they are, is invaluable.",
    personName: 'Michael Solati',
    personContact: 'DevRel @ Amplication',
    personImageURL: '/say_card/person_4.png',
  },
  {
    id: 4,
    titleImageURL: '/say_card/mark_2.png',
    contents:
      "Nevo's thoughts were insightful, his ideas and strategies are experimented with regular improvements towards the growth of GitHub stargazers and contributors.",
    personName: 'Teja Kummarikuntla',
    personContact: 'Developer Advocate @ ToolJet',
    personImageURL: '/say_card/person_2.png',
  },
];

const SayCardCarousel: React.FC = () => {
  const isDesktop = useMediaQuery({ minWidth: 768 });
  const [activeCardCnt, setActiveCardCnt] = useState(1);
  const [cardList, setCardList] = useState(slideDataList);
  const [activeBeginIndex, setActiveBeginIndex] = useState(0);
  const cardSlideRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isDesktop) setActiveCardCnt(3);
    else setActiveCardCnt(1);
  }, [isDesktop]);

  const handlePrev = () => {
    if (activeBeginIndex == 0) return;
    
    setActiveBeginIndex((old) => old - 1);
    console.log("current begin index:", activeBeginIndex);
  };

  const handleNext = () => {
    if (isDesktop) {
        if (activeBeginIndex == cardList.length - 3) return;
    } else {
        if (activeBeginIndex == cardList.length - 1) return;
    }

    setActiveBeginIndex((old) => old + 1);
  };

  return (
    <div className="flex h-full w-full flex-col">
      <CardContainer 
        $activeIndex={activeBeginIndex}
        $desktopCardWidth={426}
        $mobileCardWidth={345}
        >
        {cardList.map((card) => (
          <SayCard
            key={card.id}
            titleImageURL={card.titleImageURL}
            contents={card.contents}
            sayerName={card.personName}
            contact={card.personContact}
            sayerImageURL={card.personImageURL}
          />
        ))}
      </CardContainer>
      <div className="flex flex-col items-center justify-center h-[40px] md:h-[48px] mt-[40px] w-full">
        <div className="flex h-full w-[90px] flex-row space-x-[10px] md:w-[108px] md:space-x-[12px]">
          <Image          
            src='/say_card/desktop_prev.png'
            width={48}
            height={48}
            alt=""
            className="cursor-pointer hidden md:flex"
            onClick={handlePrev}
          />
          <Image
            src='/say_card/mobile_prev.png'
            width={40}
            height={40}
            alt=""
            className="cursor-pointer flex md:hidden"
            onClick={handlePrev}
          />
          <Image
            src='/say_card/desktop_next.png'
            width={48}
            height={48}
            alt=""
            className="cursor-pointer hidden md:flex"
            onClick={handleNext}
          />
          <Image
            src='/say_card/mobile_next.png'
            width={40}
            height={40}
            alt=""
            className="cursor-pointer flex md:hidden"
            onClick={handleNext}
          />
        </div>
      </div>
    </div>
  );
};

export default SayCardCarousel;
