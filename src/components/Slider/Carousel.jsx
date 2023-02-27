import React, { useContext } from 'react';
import Slider from 'react-slick';
import {
  CarouselBox,
  CarouselImgBox,
  CarouselTitle,
  CarouselTitleBox,
} from './carousel.styled';
import { lang } from '../../lang/lang';
import { LocalizationContext } from '../../context/LocalizationContext';

export const Courusel = () => {
  const { lang: language } = useContext(LocalizationContext);

  let settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <CarouselBox>
      <div className="container mx-auto">
        <Slider {...settings}>
          <CarouselImgBox>
            <CarouselTitleBox>
              <CarouselTitle>
                {lang[language].HomePage.main.slider.SliderTitle1}
              </CarouselTitle>
              <div className="flex items-center mt-2">
                <span
                  className="mr-3"
                  style={{
                    width: '60px',
                    height: '3px',
                    backgroundColor: 'rgb(255, 255, 255)',
                  }}
                ></span>
                <span
                  className="mr-3"
                  style={{
                    width: '60px',
                    height: '3px',
                    backgroundColor: 'rgba(255, 255, 255, 0.6)',
                  }}
                ></span>
                <span
                  className="mr-3"
                  style={{
                    width: '60px',
                    height: '3px',
                    backgroundColor: 'rgba(255, 255, 255, 0.6)',
                  }}
                ></span>
                <span
                  className="mr-3"
                  style={{
                    width: '60px',
                    height: '3px',
                    backgroundColor: 'rgba(255, 255, 255, 0.6)',
                  }}
                ></span>
              </div>
            </CarouselTitleBox>
          </CarouselImgBox>
          <CarouselImgBox>
            <CarouselTitleBox>
              <CarouselTitle>
                {lang[language].HomePage.main.slider.SliderTitle2}
              </CarouselTitle>
              <div className="flex items-center mt-2">
                <span
                  className="mr-3"
                  style={{
                    width: '60px',
                    height: '3px',
                    backgroundColor: 'rgba(255, 255, 255, 0.6)',
                  }}
                ></span>
                <span
                  className="mr-3"
                  style={{
                    width: '60px',
                    height: '3px',
                    backgroundColor: 'rgb(255, 255, 255)',
                  }}
                ></span>
                <span
                  className="mr-3"
                  style={{
                    width: '60px',
                    height: '3px',
                    backgroundColor: 'rgba(255, 255, 255, 0.6)',
                  }}
                ></span>
                <span
                  className="mr-3"
                  style={{
                    width: '60px',
                    height: '3px',
                    backgroundColor: 'rgba(255, 255, 255, 0.6)',
                  }}
                ></span>
              </div>
            </CarouselTitleBox>
          </CarouselImgBox>
          <CarouselImgBox>
            <CarouselTitleBox>
              <CarouselTitle>
                {lang[language].HomePage.main.slider.SliderTitle3}
              </CarouselTitle>
              <div className="flex items-center mt-2">
                <span
                  className="mr-3"
                  style={{
                    width: '60px',
                    height: '3px',
                    backgroundColor: 'rgba(255, 255, 255, 0.6)',
                  }}
                ></span>
                <span
                  className="mr-3"
                  style={{
                    width: '60px',
                    height: '3px',
                    backgroundColor: 'rgba(255, 255, 255, 0.6)',
                  }}
                ></span>
                <span
                  className="mr-3"
                  style={{
                    width: '60px',
                    height: '3px',
                    backgroundColor: 'rgb(255, 255, 255)',
                  }}
                ></span>
                <span
                  className="mr-3"
                  style={{
                    width: '60px',
                    height: '3px',
                    backgroundColor: 'rgba(255, 255, 255, 0.6)',
                  }}
                ></span>
              </div>
            </CarouselTitleBox>
          </CarouselImgBox>
          <CarouselImgBox>
            <CarouselTitleBox>
              <CarouselTitle>
                {lang[language].HomePage.main.slider.SliderTitle4}
              </CarouselTitle>
              <div className="flex items-center mt-2">
                <span
                  className="mr-3"
                  style={{
                    width: '60px',
                    height: '3px',
                    backgroundColor: 'rgba(255, 255, 255, 0.6)',
                  }}
                ></span>
                <span
                  className="mr-3"
                  style={{
                    width: '60px',
                    height: '3px',
                    backgroundColor: 'rgba(255, 255, 255, 0.6)',
                  }}
                ></span>
                <span
                  className="mr-3"
                  style={{
                    width: '60px',
                    height: '3px',
                    backgroundColor: 'rgba(255, 255, 255, 0.6)',
                  }}
                ></span>
                <span
                  className="mr-3"
                  style={{
                    width: '60px',
                    height: '3px',
                    backgroundColor: 'rgb(255, 255, 255)',
                  }}
                ></span>
              </div>
            </CarouselTitleBox>
          </CarouselImgBox>
        </Slider>
      </div>
    </CarouselBox>
  );
};
