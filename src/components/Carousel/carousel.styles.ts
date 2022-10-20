import styled from 'styled-components/macro';

export const CarouselWrapper = styled.section`
  display:flex;
  flex-direction: column;
  background-color: #FDFCF5;
  width: 100%;
  padding: 4rem 0;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 4rem 0;
  }
`;

export const CarouselTitle = styled.h2`
  margin: 6px auto;
  text-align: center;
  font-weight: 600;
  font-size: 60px;
  font-family: 'Lora';

  @media (max-width: 768px) {
    font-size: 40px;
  }
`;

export const CarouselCardsContainer = styled.div`
  padding: 4rem 0;

  @media (max-width: 768px) {
    display: flex;
    padding: 2rem 0;
  }
`;

export const CarouselCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  width: 460px;
  height: 392px;
  border: 1px solid #A0CDBF;
  border-radius: 10px;
  margin: 0;
  padding: 2rem;

  @media (max-width: 768px) {
    width: 80%;
    padding: 2rem 1rem;
    margin: 0 auto;
  }
`;

export const CarouselCardTitle = styled.h3`
  font-family: 'Lora';
  font-style: normal;
  font-weight: 500;
  font-size: 28px;
  line-height: 36px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 18px;
  }

`;

export const CarouselCardImg = styled.img`
  width: 1/3;
  height: 25px;

  @media (max-width: 768px) {
    width: 1/3;
    height: 25px;
  }
`;
