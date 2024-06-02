import { styled } from 'styled-components';

export const CardContainer = styled.div<{
  $activeIndex: number;
  $desktopCardWidth: number;
  $mobileCardWidth: number;
}>`
  display: flex;
  flex-direction: row;
  height: 308px;
  width: 1723px;
  transform: ${(props) =>
    `translateX(-${props.$activeIndex * props.$mobileCardWidth}px)`};

  @media screen and (min-width: 768px) and (max-width: 1920px) {
    height: 291px;
    width: 2126px;
    transform: ${(props) =>
      `translateX(-${(props.$activeIndex * props.$desktopCardWidth - 40)}px)`};
  }
`;
