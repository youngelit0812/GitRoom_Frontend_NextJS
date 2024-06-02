import { styled } from 'styled-components';

export const TitleContainer = styled.div<{
  $desktopWidth: number;
  $desktopHeight: number;
  $mobileWidth: number;
  $mobileHeight: number;
}>`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: ${({ $mobileWidth }) => $mobileWidth}px;
  height: ${({ $mobileHeight }) => $mobileHeight}px;

  @media screen and (min-width: 768px) and (max-width: 1920px) {
    width: ${({ $desktopWidth }) => $desktopWidth}px;
    height: ${({ $desktopHeight }) => $desktopHeight}px;
  }

  z-index: 19;
`;

export const TitleImageContainer = styled.div<{
  $desktopWidth: number;
  $desktopHeight: number;
  $mobileWidth: number;
  $mobileHeight: number;
}>`
  position: relative;
  display: flex;

  width: ${({ $mobileWidth }) => $mobileWidth}px;
  height: ${({ $mobileHeight }) => $mobileHeight}px;

  @media screen and (min-width: 768px) and (max-width: 1920px) {
    width: ${({ $desktopWidth }) => $desktopWidth}px;
    height: ${({ $desktopHeight }) => $desktopHeight}px;
  }
`;