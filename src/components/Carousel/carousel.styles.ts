import styled from 'styled-components/macro';

export const CarouselWrapper = styled.section`
  display:flex;
  flex-direction: column;
  background-color: #FDFCF5;
  width: 100%;
  padding: 4rem 0;
  overflow: hidden;
`;

export const CarouselTitle = styled.h2`
  margin: 6px auto;
  text-align: center;
  font-weight: 600;
  font-size: 60px;
  font-family: 'Lora';
`;

export const CarouselCardsContainer = styled.div`
  padding: 4rem 0;
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
`;

export const CarouselCardTitle = styled.h3`
  font-family: 'Lora';
  font-style: normal;
  font-weight: 500;
  font-size: 28px;
  line-height: 36px;
  text-align: center;
`;

export const CarouselCardImg = styled.img`
  width: 1/3;
  height: 25px;

`;
