import styled, { css } from 'styled-components';

export const FooterContainer = styled.footer`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: nowrap;
  }
`;

export const FooterContent = styled.div<{ variant?: string }>`
  ${({ variant }: any) => css`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 2rem 0;
    background: ${variant === 'primary' ? '#DBE7E4' : '#A0CDBF'};
    width: 100%;
    height: 100%;

    padding: 4rem 6rem;

    @media (max-width: 768px) {
      padding: 2rem 2rem;
    }

    h2 {
      font-style: normal;
      font-weight: 500;
      font-size: 80px;
      line-height: 100%;
      font-family: 'Lora';

      display: flex;
      align-items: flex-end;

      @media (max-width: 768px) {
        font-size: 50px;
      }
    }

    :nth-child(1) {
      button {
        margin-top: 5rem;

        @media (max-width: 768px) {
          margin-top: 2rem;
        }
      }
    }
  `}
`;

export const FooterContentInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 2rem 0;

  border-bottom: 1px solid #DBE7E4;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  }

  :last-child {
    border-bottom: none;
  }

  h3 { 
    font-style: normal;
    font-weight: 500;
    font-size: 48px;
    line-height: 61px;
    font-family: 'Lora';

    @media (max-width: 768px) {
      font-size: 30px;
    }
  }
`;