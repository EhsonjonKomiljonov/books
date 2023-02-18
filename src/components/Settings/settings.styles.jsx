import styled from 'styled-components';
import ArrowDown from '../../assets/images/arrow-down.svg';

export const SettingsThemeLabel = styled.label`
  position: relative;
  display: block;
  width: 65px;
  height: 30px;
  background: grey;
  border-radius: 100px;
  text-indent: -9999px;
  cursor: pointer;

  &::after {
    position: absolute;
    top: 3px;
    left: 3px;
    width: 25px;
    height: 25px;
    background: #fff;
    border-radius: 90px;
    transition: 0.3s;
    content: '';
  }
`;

export const SettingsThemeInput = styled.input`
  height: 0;
  width: 0;
  visibility: hidden;

  &:checked ~ label {
    background-color: #19c92e;
  }

  &:checked ~ label::after {
    left: calc(100% - 3px);
    transform: translateX(-100%);
  }
`;

export const SettingsSelectArrow = styled.span`
  position: absolute;
  bottom: 10px;
  right: 20px;
  display: block;
  width: 24px;
  height: 24px;
  background-image: url(${ArrowDown});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 20px;
`;
