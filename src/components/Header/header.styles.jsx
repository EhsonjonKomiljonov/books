import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import ArrowDown from '../../assets/images/arrow-down.svg';

export const HeaderProfileDropDownBtn = styled.button`
  position: relative;
  padding: 3px 17px;
  border-radius: 50%;
  font-size: 29px;
  background-color: #08d908;
  color: #fff;

  &::after {
    position: absolute;
    top: 5px;
    right: -20px;
    width: 11px;
    height: 8px;
    padding: 20px;
    background-image: url(${ArrowDown});
    background-repeat: no-repeat;
    background-position: right;
    content: '';
  }
`;

export const HeaderProfileDropDown = styled.ul`
  width: 140px;
  top: 58px;
  right: -20px;
  z-index: 8;
`;

export const HeaderProfileDropDownLink = styled(NavLink)`
  font-family: 'Poppins';
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
`;
