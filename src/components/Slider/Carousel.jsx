import React from 'react';
import Slider from 'react-slick';
import {
  CarouselBox,
  CarouselImgBox,
  CarouselTitle,
  CarouselTitleBox,
} from './carousel.styled';

export const Courusel = () => {
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
              <CarouselTitle>Temuriylar davri adabiyoti</CarouselTitle>
            </CarouselTitleBox>
          </CarouselImgBox>
          <CarouselImgBox>
            <CarouselTitleBox>
              <CarouselTitle>Jadidlar davri adabiyoti</CarouselTitle>
            </CarouselTitleBox>
          </CarouselImgBox>
          <CarouselImgBox>
            <CarouselTitleBox>
              <CarouselTitle>Sovet davri adabiyoti</CarouselTitle>
            </CarouselTitleBox>
          </CarouselImgBox>
          <CarouselImgBox>
            <CarouselTitleBox>
              <CarouselTitle>Mustaqillik davri adabiyoti</CarouselTitle>
            </CarouselTitleBox>
          </CarouselImgBox>
        </Slider>
      </div>
    </CarouselBox>
  );
};
