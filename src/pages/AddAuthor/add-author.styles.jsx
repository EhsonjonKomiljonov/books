import styled from 'styled-components';
import Plus from '../../assets/images/plus-icon.svg';
import ArrowDown from '../../assets/images/arrow-down.svg';

export const AddAuthorSection = styled.section`
  padding-left: 50%;
  height: 100vh;
`;

export const AddAuthorFileUploadBox = styled.div`
  position: absolute;
  left: 0;
  width: 50%;
  height: 100vh;
  display: flex;
  justify-content: center;
  background-color: #f3f3f3ed;
`;

export const AddAuthorFileUpload = styled.label`
  position: absolute;
  top: 146px;
  left: calc(50% - 170px);
  z-index: 0;
  display: block;
  width: 315px;
  height: 428px;
  padding: 231px 73px 0;
  background-color: #f8f8f8;
  border: 1px dashed #0000004c;
  border-radius: 17px;
  background-image: url(${Plus});
  background-repeat: no-repeat;
  background-position: top 161px center;
  cursor: pointer;

  & > p {
    font-weight: 400;
    font-size: 13px;
    line-height: 18px;
    color: #0000004c;
    text-align: center;
    content: '';
  }

  & > input {
    display: none;
  }
`;

export const FileName = styled.p`
  display: flex;
  align-self: flex-end;
  z-index: 2;
  margin-bottom: 150px;
  color: #7e7c7c;
`;

export const AddAuthorSelectArrow = styled.span`
  position: absolute;
  top: 15px;
  right: calc(50% + 20px);
  width: 24px;
  height: 24px;
  background-image: url(${ArrowDown});
  background-position: center;
  background-size: 20px 12px;
  background-repeat: no-repeat;
`;
