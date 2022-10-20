import { useEffect, useState } from "react";
import * as S from "./carousel.styles";
import Slider from "react-slick";
import { NewsInterface } from "../../pages/About";

import { imgs } from "../../assets/logos";
import { NameFormat } from "../../util/NameFormat";

type CarouselProps = {
  news: NewsInterface[];
};

export const Carousel = ({ news }: CarouselProps) => {
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  useEffect(() => {
    function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    }

    window.addEventListener("resize", handleResize);
  });

  const settings = {
    dots: true,
    infinite: false,
    slidesToShow: dimensions.width < 768 ? 1 : 3,
    slidesToScroll: dimensions.width < 768 ? 1 : 2,
    autoplay: false,
    speed: 1000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  return (
    <S.CarouselWrapper>
      <S.CarouselTitle>Justpoint in the news</S.CarouselTitle>

      {news.length > 0 && (
        <Slider {...settings}>
          {news.map(({ text, company }) => {
            return (
              <S.CarouselCardsContainer key={company}>
                <S.CarouselCard>
                  <S.CarouselCardTitle>{text}</S.CarouselCardTitle>
                  <S.CarouselCardImg
                    src={imgs[NameFormat(company)]}
                    alt={company}
                  />
                </S.CarouselCard>
              </S.CarouselCardsContainer>
            );
          })}
        </Slider>
      )}
    </S.CarouselWrapper>
  );
};
