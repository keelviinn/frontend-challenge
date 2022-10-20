import styled from 'styled-components/macro';

export const HeaderMenuWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 40px;

  @media (max-width: 768px) {
    padding: 20px 30px;
    flex-direction: column;
  }
`;

export const HeaderMenu = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    margin-top: 20px;
  }

  li {
    margin: 0 10px;
  }
`;

export const HeaderLink = styled.a`
  text-decoration: none;
  color: #000;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    font-size: 12px;
  }

  &:hover {
    color: green;
  }
`;

export const CompanyName = styled.h1`
  font-family: 'Lora';
  font-size: 24px;
  font-weight: 700;
  color: #000;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;