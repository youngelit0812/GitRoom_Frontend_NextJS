import { styled } from 'styled-components';

export const TitleContainer = styled.div<{
  $desktopWidth: number;
  $desktopHeight: number;
  $mobileWidth: number;
  $mobileHeight: number;
}>`
  align-items: center;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 19;

  width: ${({ $desktopWidth }) => $desktopWidth}px;
  height: ${({ $desktopHeight }) => $desktopHeight}px;

  @media screen and (max-width: 375px) {
    width: ${({ $mobileWidth }) => $mobileWidth}px;
    height: ${({ $mobileHeight }) => $mobileHeight}px;
  }
`;

export const TitleImageContainer = styled.div<{
  $desktopWidth: number;
  $desktopHeight: number;
  $mobileWidth: number;
  $mobileHeight: number;
}>`
  position: relative;
  display: flex;

  width: ${({ $desktopWidth }) => $desktopWidth}px;
  height: ${({ $desktopHeight }) => $desktopHeight}px;

  @media screen and (max-width: 375px) {
    width: ${({ $mobileWidth }) => $mobileWidth}px;
    height: ${({ $mobileHeight }) => $mobileHeight}px;
  }
`;
