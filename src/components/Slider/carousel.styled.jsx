import styled from 'styled-components';
import sliderImg from '../../assets/images/hero-slide-1.png';

export const CarouselBox = styled.section`
  & > div > div > button {
    display: none !important;
    content: '';
  }

  & > div > div > button::before {
    display: none !important;
    content: '';
  }
`;

export const CarouselImgBox = styled.div`
  position: relative;
  width: 100%;
  padding: 173px 0;
  background-image: url(${sliderImg});
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 21px;
`;

export const CarouselTitleBox = styled.div`
  position: absolute;
  bottom: 75px;
  left: 86px;
  width: 337px;
`;

export const CarouselTitle = styled.h2`
  font-family: 'Courier New', Courier, monospace;
  font-weight: 400;
  font-size: 55px;
  line-height: 60px;
  color: #d1b89d;
`;
