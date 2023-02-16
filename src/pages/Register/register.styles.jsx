import { Field } from 'formik';
import styled from 'styled-components';
import RegisterImg from '../../assets/images/register-img.png';

export const RegisterSection = styled.section`
  height: 100vh;
  padding-left: 768px;
`;

export const RegisterImgBox = styled.div`
  position: absolute;
  left: 0;
  width: 50%;
  height: 100vh;
  background-color: #c9ac8ced;
`;

export const RegisterImgStyle = styled.div`
  width: 500px;
  height: 500px;
  background-image: url(${RegisterImg});
  background-position: center;
`;

export const RegisterContentBox = styled.div`
  padding: 131px 0 0 25%;
`;

export const RegisterTitle = styled.h1`
  font-weight: 900;
  font-size: 36px;
  line-height: 51px;
`;

export const RegisterDesc = styled.p`
  font-family: 'Roboto';
  font-weight: 400;
  font-size: 13px;
  line-height: 15px;
`;

export const RegisterInput = styled(Field)`
  display: block;
  width: 330px;
  padding: 16px 29px;
  font-family: 'Roboto';
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: #aaaaaa;
  border: 1px solid #b4b4bb;
  border-radius: 10px;
  outline: none;

  &:focus {
    outline: 2px solid #c9ac8ced;
  }
`;
