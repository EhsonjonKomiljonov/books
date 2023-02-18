import styled from 'styled-components';

export const ArrowDownStyle = styled.p`
  position: relative;
  &::before {
    position: absolute;
    top: 5px;
    left: 115px;
    width: 10px;
    height: 13px;
    background-image: var(--arrow-down-more-info);
    background-position: center;
    background-repeat: no-repeat;
    content: '';
  }
`;
