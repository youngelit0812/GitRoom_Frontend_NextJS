import { styled } from 'styled-components';

export const RadiusButtonWrapper = styled.div<{
  $desktop_height: number;
  $desktop_width: number;
  $mobile_height: number;
  $mobile_width: number;
}>`
  width: ${({ $desktop_width }) => $desktop_width}px;
  height: ${({ $desktop_height }) => $desktop_height}px;
  
  @media screen and (max-width: 375px) {
    width: ${({ $mobile_width }) => $mobile_width}px;
    height: ${({ $mobile_height }) => $mobile_height}px;
  }
`;
