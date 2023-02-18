import styled from 'styled-components';
import CameraIcon from '../../assets/images/camera.svg';

export const FileUploadIcon = styled.span`
  position: absolute;
  top: 135px;
  left: 120px;
  display: block;
  width: 50px;
  height: 50px;
  box-shadow: #0000003f 0px 5px 15px, #00000038 0px 3px 3px;
  background-color: #f3f6f9;
  border-radius: 8px;
  background-image: url(${CameraIcon});
  background-position: center;
  background-repeat: no-repeat;
`;
