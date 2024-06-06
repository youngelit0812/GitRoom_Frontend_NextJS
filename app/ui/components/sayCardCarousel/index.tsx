import { useEffect, useState } from 'react';
import Image from 'next/image';
import SayCard from '@/app/ui/components/sayCard';

import "@/app/ui/styles/simpleCarousel.scss";

type CardProp = {
  id: number;
  titleImageURL: string;
  contents: string;
  personName: string;
  personContact: string;
  personImageURL: string;
}

const slideDataList:CardProp[] = [
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
  const [moveClass, setMoveClass] = useState('');
  const [carouselItems, setCarouselItems] = useState(slideDataList);
  
  useEffect(() => {
    document.documentElement.style.setProperty('--num', "" + carouselItems.length);
  }, [carouselItems])
  
  const handleAnimationEnd = () => {
    if(moveClass === 'prev'){
      shiftNext([...carouselItems]);
    }else if(moveClass === 'next'){
      shiftPrev([...carouselItems]);
    }
    setMoveClass('')
  }
  
  const shiftPrev = (copy:CardProp[]) => {
    let lastcard = copy.pop();
    if (lastcard) {
        copy.splice(0, 0, lastcard);
        setCarouselItems(copy);
    }
  }
  
  const shiftNext = (copy:CardProp[]) => {
    let firstcard = copy.shift();
    if (firstcard) {
        copy.splice(copy.length, 0, firstcard);
        setCarouselItems(copy);
    }
  }

  return (
    <div>
      <div className="carouselwrapper">      
        <ul onAnimationEnd={handleAnimationEnd} className={`${moveClass} carousel`}>
          {carouselItems.map((card, index) => 
            <SayCard
              key={card.id}
              titleImageURL={card.titleImageURL}
              contents={card.contents}
              sayerName={card.personName}
              contact={card.personContact}
              sayerImageURL={card.personImageURL}
              />
          )}
        </ul>
      </div>
      <div className="flex flex-col items-center justify-center h-[40px] md:h-[48px] mt-[40px] w-full">
        <div className="relative flex h-full w-[90px] flex-row space-x-[10px] md:w-[108px] md:space-x-[12px] z-[19]">
          <Image          
            src='/say_card/desktop_prev.png'
            width={48}
            height={48}
            alt=""
            className="cursor-pointer hidden md:flex z-[20]"
            onClick={() => setMoveClass('next')}
          />
          <Image
            src='/say_card/mobile_prev.png'
            width={40}
            height={40}
            alt=""
            className="cursor-pointer flex md:hidden z-[20]"
            onClick={() => setMoveClass('next')}
          />
          <Image
            src='/say_card/desktop_next.png'
            width={48}
            height={48}
            alt=""
            className="cursor-pointer hidden md:flex z-[20]"
            onClick={() => setMoveClass('prev')}
          />
          <Image
            src='/say_card/mobile_next.png'
            width={40}
            height={40}
            alt=""
            className="cursor-pointer flex md:hidden z-[20]"
            onClick={() => setMoveClass('prev')}
          />
        </div>
      </div>
    </div>
  );
};

export default SayCardCarousel;
