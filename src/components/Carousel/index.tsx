import * as S from "./carousel.styles";
import Slider from "react-slick";
import { NewsInterface } from "../../pages/About";

import { imgs } from "../../assets/logos";
import { NameFormat } from "../../util/NameFormat";


type CarouselProps = {
  news: NewsInterface[];
};

export const Carousel = ({ news }: CarouselProps) => {
  const { innerWidth: width } = window;

  const settings = {
    dots: true,
    infinite: false,
    slidesToShow: width < 768 ? 1 : 3,
    slidesToScroll: width < 768 ? 1 : 2,
    autoplay: false,
    speed: 1000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };

  return (
    <S.CarouselWrapper>
      <S.CarouselTitle>Justpoint in the news</S.CarouselTitle>

      {news.length > 0 && (
        <Slider {...settings}>
          {news.map(({ text, company }) => {
            return (
              <S.CarouselCardsContainer>
                <S.CarouselCard>
                  <S.CarouselCardTitle>{text}</S.CarouselCardTitle>
                  <S.CarouselCardImg src={imgs[NameFormat(company)]} />
                </S.CarouselCard>
              </S.CarouselCardsContainer>
            );
          })}
        </Slider>
      )}
    </S.CarouselWrapper>
  );
};
