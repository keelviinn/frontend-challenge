import styled from 'styled-components/macro';

export const FormWrapper = styled.section`
  display: flex;
  margin: 0 auto;
  padding: 4rem 0;
  background: #F5F5F5;
  justify-content: center;

  @media (max-width: 768px) {
    padding: 4rem 1rem;
  }
`;

export const FormCard = styled.div`
  border: 1px solid #A0CDBF;
  border-radius: 10px;
  background: #FFFFFF;
  padding: 30px 40px; 
  max-width: 630px;

  @media (max-width: 768px) {
    padding: 30px 20px;
  }
`;

export const FormHeader = styled.div`
  h2 {
    margin: 15px 0;
    font-style: normal;
    padding: 0 10px;
    font-weight: 500;
    font-size: 48px;
    line-height: 61px;
    text-align: center;
    font-family: 'Lora';

    @media (max-width: 768px) {
      font-size: 36px;
      line-height: 48px;
    }
  }

  p {
    padding: 10px 15px;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 32px;
    text-align: center;

    @media (max-width: 768px) {
      font-size: 16px;
      line-height: 24px;
    }
  }
`;

export const FormFooter = styled.div`
   p {
    padding: 10px 15px;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 100%;
    text-align: center;

    @media (max-width: 768px) {
      font-size: 14px;
      line-height: 24px;
    }
  }

  span {
    font-size: 12px;

    @media (max-width: 768px) {
      font-size: 10px;
    }
  }
`

export const Form = styled.div`
  width: 100%;
  padding: 20px 10px;
`;