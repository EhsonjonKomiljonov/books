import styled from 'styled-components';

export const SearchBox = styled.div`
  position: absolute;
  right: calc(50% - 520px);
  top: -80px;
  z-index: 10;
  padding: 29px 73px;
  background-color: #fff;
  box-shadow: 0px 4px 77px #0000003f;

  &.true {
    top: -270px;
  }
`;

export const SearchBtn = styled.button`
  position: relative;
  &::before {
    position: absolute;
    left: 42px;
    width: 24px;
    height: 24px;
    background-image: var(--bgi-search-btn);
    content: '';
  }
`;
