import { styled } from 'styled-components';

export const ArticleCardWrapper = styled.div<{
  $backImgURL?: string;
}>`
  background: ${({ $backImgURL }) =>
    $backImgURL === '' ? 'black' : `url(${$backImgURL}) no-repeat`};
`;

export const ArticleCardTitleWrapper = styled.div<{
  $backImgURL?: string;
}>`
  background: ${({ $backImgURL }) =>
    $backImgURL === '' ? 'black' : `url(${$backImgURL}) no-repeat`};
`;
