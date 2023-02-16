import styled from 'styled-components';

export const AuthorBooks = styled.div`
padding-bottom: 10px;
  &::-webkit-scrollbar-track {
    width: 5px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #f5f5f5;
  }

  &::-webkit-scrollbar {
    height: 5px;
    background-color: #f5f5f5;
  }

  &::-webkit-scrollbar-thumb {
    width: 5px;
    background-color: #000000;
    border: 2px solid #555555;
  }
`;
