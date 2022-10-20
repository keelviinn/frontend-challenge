import styled from 'styled-components/macro';

export const HeaderWrapper = styled.header`
  display: flex;
  flex-direction: column;
`;

export const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: border-box;
  padding: 5rem 20rem;
  margin: 0 auto;
`;

export const MainTextContent = styled.h1`
  font-size: 80px;
  font-weight: 500;
  text-align: center;
  color: #000;
  line-height: 100%;
  font-family: 'Lora';
`;

export const SecondaryTextContent = styled.p`
  margin-top: 4rem;
  font-size: 18px;
  font-weight: 400;
  color: #000;
  text-align: center;
  line-height: 32px;
  padding: 0 2rem;
`;