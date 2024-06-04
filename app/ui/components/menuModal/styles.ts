import { styled } from 'styled-components';

export const MenuModalWrapper = styled.div<{ $isshow: boolean }>`
  width: 335px;
  height: 612px;
  position: fixed;
  background-color: rgba(38, 37, 52, 0.35);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  top: 12px;
  left: calc(50% - 335px/2);
  z-index: 20;
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: ${({ $isshow }) => ($isshow ? 1 : 0)};
  visibility: ${({ $isshow }) => ($isshow ? 'visible' : 'hidden')};
`;

export const CloseBtn = styled.div`
  @apply leading-none;
  span {
    cursor: pointer;
  }
  color: #FFFFFF;
  font-size: 24px;  
  display: flex;
  justify-content: flex-end;
`;